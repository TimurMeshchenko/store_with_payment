from django.shortcuts import get_object_or_404
from django.views import generic
from typing import Union, Any, Optional
from django.http import JsonResponse
import stripe
import json

from store import settings
from store_app.models import Product  

stripe.api_key = settings.STRIPE_SECRET_KEY

class CatalogView(generic.ListView):
    template_name = "catalog.html"
    context_object_name = "products"

    def get_queryset(self):
        return Product.objects.all()

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
        # return sum([get_object_or_404(Product, pk=product['id']).price for product in basket])
        return 1000 * 100

def get_product(request):
    product_name = request.GET.get('product_name')
    product_object = get_object_or_404(Product, name=product_name)
    product = product_object.__dict__
    product.pop('_state')

    return JsonResponse({"product": product})
