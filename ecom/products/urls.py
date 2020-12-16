
from django.contrib import admin
from django.urls import path
from .views import (
    get_product_data,
    get_product_kinds,
    get_navbar_items,
    get_specific_product,
    updateCart,
    get_current_order
    

)

urlpatterns = [
    
    path('products', get_product_data),
    path('kinds', get_product_kinds),
    path('navbar-items', get_navbar_items),
    path('product/<int:product_id>/', get_specific_product),
    path('updateCart', updateCart),
    path('getOrder', get_current_order)
    
    
]
