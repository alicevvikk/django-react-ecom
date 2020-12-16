# django imports
from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.core import serializers
from django.conf import settings
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import get_object_or_404
# model imports
from .models import Product, Order, OrderItem
from accounts.models import  Customer, ShippingAddress
# python imports
import json
# serializer and rest_framework imports
from .serializers import ProductSerializer, UserSerializer, OrderSerializer
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer, TemplateHTMLRenderer

PRODUCT_KINDS = settings.PRODUCT_KINDS
NAVBAR_ITEMS = settings.NAVBAR_ITEMS
# All views
'''
@api_view(('GET',))
@renderer_classes((TemplateHTMLRenderer, JSONRenderer))
'''


@api_view(['GET'])
def get_product_data(request, *args, **kwargs):
    if request.method == 'GET':
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        # serializer.stringify_kind()
        # print(serializer.data)
        return Response(serializer.data)

    return JsonResponse({"error": "error"}, safe=False)


@api_view(('GET',))
def get_product_kinds(request, *args, **kwargs):
    if request.method == 'GET':

        return Response(PRODUCT_KINDS)


@api_view(('GET',))
def get_navbar_items(request, *args, **kwargs):
    if request.method == 'GET':

        return Response(NAVBAR_ITEMS)


@api_view(('GET',))
def get_specific_product(request, product_id, *args, **kwargs):
    if request.method == 'GET':
        product = Product.objects.filter(id=product_id)
        serializer = ProductSerializer(product, many=True)
        print(product)
        return Response(serializer.data)

@csrf_exempt
@api_view(('GET', 'POST',))
def updateCart(request):
    
    
    action = request.data.get('action')
    productId = request.data.get('productId')
    

    customer = request.user.customer
    product = get_object_or_404(Product, id= productId)
    order, created = Order.objects.get_or_create(customer= customer, complete= False)
    
    orderItem, created = OrderItem.objects.get_or_create(order= order, product= product)

    if action == 'add':
            orderItem.quantity += 1

    elif action == 'remove':
        orderItem.quantity -= 1
    
    orderItem.save()

    if orderItem.quantity <= 0:
        orderItem.delete()   
    print("total:", order.get_cart_total)
    serializer = OrderSerializer(order)
    return Response(serializer.data)


@api_view(['GET'])
def get_current_order(request, *args, **kwargs):
    customer = request.user.customer
    order, created = Order.objects.get_or_create(customer= customer, complete= False)

    serializer = OrderSerializer(order)
    return Response(serializer.data)


