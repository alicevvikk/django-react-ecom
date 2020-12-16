from rest_framework import serializers
from .models import Product, Order, OrderItem
from django.contrib.auth.models import User


class ProductSerializer(serializers.ModelSerializer):
    kind = serializers.CharField(source = 'get_kind_display')
    # print(kind)
    class Meta:

        model = Product
        fields = ['id','image', 'name', 'kind',
                  'price', 'description', 'is_featured']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')

class OrderSerializer(serializers.ModelSerializer):
    lengthOrder = serializers.IntegerField(source = 'get_cart_items')
    class Meta:
        model = Order
        fields = ('customer', 'shipping_address', 'date_ordered', 'complete', 'transaction_id', 'lengthOrder')
        
class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = ('order', 'quantity', 'date_added', 'product')
