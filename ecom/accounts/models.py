from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Customer(models.Model):
    user = models.OneToOneField(User, on_delete = models.CASCADE, null= True, blank= True)
    name = models.CharField(max_length=50, null=True, verbose_name="Customer Name")
    email = models.EmailField(max_length=50, null=True,verbose_name= "Customer Email")
    password = models.CharField(max_length=50)

    def __str__(self):
        
        return self.name

class ShippingAddress(models.Model):
    user = models.ForeignKey(Customer,null= True ,on_delete = models.SET_NULL)
    address = models.TextField(max_length= 100)
    city = models.CharField(max_length= 20)
    state = models.CharField(max_length= 20)
    zip = models.IntegerField()
    date_added = models.DateTimeField(auto_now_add=True)
    is_saved = models.BooleanField(default=False,null=True, blank=False)

    def __str__(self):

        return self.user.name






