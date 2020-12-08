#django imports
from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.core import serializers
from django.conf import settings
#model imports
from .models import Product
#python imports
import json
#serializer and rest_framework imports
from .serializers import ProductSerializer
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer, TemplateHTMLRenderer

PRODUCT_KINDS = settings.PRODUCT_KINDS
NAVBAR_ITEMS = settings.NAVBAR_ITEMS
#All views
'''
@api_view(('GET',))
@renderer_classes((TemplateHTMLRenderer, JSONRenderer))
'''
@api_view(['GET'])
def get_product_data(request, *args, **kwargs):
    if request.method == 'GET':
        products = Product.objects.all()
        serializer = ProductSerializer(products, many= True)
        #serializer.stringify_kind()
        #print(serializer.data)
        return Response(serializer.data)


    return JsonResponse({"error":"error"}, safe= False)
@api_view(('GET',))
def get_product_kinds(request, *args, **kwargs):
    if request.method == 'GET':
        
        return Response(PRODUCT_KINDS)

@api_view(('GET',))
def get_navbar_items(request, *args, **kwargs):
    if request.method == 'GET':

        return Response(NAVBAR_ITEMS)