
from django.contrib import admin
from django.urls import path
from .views import (
    get_product_data,
    get_product_kinds,
    get_navbar_items

)

urlpatterns = [
    
    path('products', get_product_data),
    path('kinds', get_product_kinds),
    path('navbar-items', get_navbar_items),
]
