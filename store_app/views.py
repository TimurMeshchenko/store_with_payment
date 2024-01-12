from django.shortcuts import render
from django.views import generic
from django.http import HttpRequest

class CatalogView(generic.ListView):
    template_name = "catalog.html"

    def get_queryset(self):
        pass
