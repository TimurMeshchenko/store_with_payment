from django.shortcuts import get_object_or_404
from django.views import generic
from django.http import JsonResponse
from django.shortcuts import render
import stripe
import json

from store import settings
from store_app.models import Product  

stripe.api_key = settings.STRIPE_SECRET_KEY

class CatalogView(generic.ListView):
    template_name = "catalog.html"

    def get_queryset(self):
        pass

class BasketView(generic.ListView):
    template_name = "basket.html"

    def get_queryset(self):
        pass

    def post(self, request, **kwargs):
        basket = json.loads(request.body)
        payment_intent = stripe.PaymentIntent.create(
            amount=self.calculate_order_amount(basket),
            currency='rub',
        )

        return JsonResponse({'clientSecret': payment_intent.client_secret})

    def calculate_order_amount(self, basket):
        total_price = 0

        for product in basket:
            product_object = get_object_or_404(Product, pk=product['id'])
            product_count = product['count'] if 'count' in product else 1
            total_price += product_object.price * product_count

        return int(total_price * 100)

def get_products_page(request):
    offset = int(request.GET.get('offset', 0))
    limit = int(request.GET.get('limit', 30))

    products_page_objects = Product.objects.all().order_by('id')[offset:offset + limit]    
    context = {'products': products_page_objects}
    products_html = render(request, 'product_template.html', context).content.decode()

    return JsonResponse({"products": products_html})

def get_product(request):
    product_id = request.GET.get('product_id')
    product_object = get_object_or_404(Product, pk=product_id)
    product = product_object.__dict__
    product.pop('_state')

    return JsonResponse({"product": product})

def get_products_by_search(request):
    product_name = request.GET.get('product_name')
    products_matched = Product.objects.filter(name__icontains=product_name)[:10]
    products_matched_dict = list()

    for product in products_matched:
        product_dict = product.__dict__
        product_dict.pop('_state')
        products_matched_dict.append(product_dict)

    return JsonResponse({"products": products_matched_dict})