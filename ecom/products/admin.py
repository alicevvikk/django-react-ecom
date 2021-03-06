from django.contrib import admin
from .models import Product, Order, OrderItem
# Register your models here.

class ProductAdmin(admin.ModelAdmin):
    list_display = ('name',)
    list_filter = ('kind',)
    


admin.site.register(Product, ProductAdmin)
admin.site.register(Order)
admin.site.register(OrderItem)
