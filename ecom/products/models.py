#django imports
from django.db import models
from django.conf import settings
from accounts.models import ShippingAddress, Customer
#model imports


PRODUCT_KINDS = settings.PRODUCT_KINDS


#models
class Product(models.Model):
    is_featured = models.BooleanField(default= False)
    image = models.ImageField(null= True, blank= True)
    name = models.CharField(max_length= 50)
    kind = models.CharField(choices= PRODUCT_KINDS, max_length=30)
    price = models.FloatField()
    description = models.TextField(max_length=250, default= "No description for this item.")

class Order(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, null=True, blank=True)
    shipping_address = models.ForeignKey(ShippingAddress,on_delete=models.SET_NULL,null=True, blank=True)
    date_ordered = models.DateTimeField(auto_now_add=True,)
    complete = models.BooleanField(default=False,null=True, blank=False)  
    transaction_id = models.CharField(max_length= 200,null=True)
    
    
    
    @property
    def get_cart_total(self):
        orderitems = self.orderitem_set.all()
        total = 0
        total = sum([item.get_total for item in orderitems])
        return total
    
    @property
    def get_cart_items(self):
        orderitems = self.orderitem_set.all()
        total = sum([item.quantity for item in orderitems])
        return total
    
  
    """
    @property
    def shipping(self):
        shipping = False
        orderitems = Order.orderitem_set.all()
        print(orderitems)
        for item in orderitems:
            if item.digital == False:
                shipping = True
                break
        return shipping  
    """
class OrderItem(models.Model):
    product = models.ForeignKey(Product,on_delete=models.CASCADE, null=True, blank=True)
    order = models.ForeignKey(Order,on_delete=models.CASCADE,null=True, blank=True, verbose_name="Order ID")
    quantity = models.IntegerField(default=0, null=True)
    date_added = models.DateTimeField(auto_now_add=True)
    
    @property
    def get_total(self):
        total = self.product.price * self.quantity
        
        return total

    def __str__(self):

        return str(self.id)


