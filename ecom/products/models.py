#django imports
from django.db import models
from django.conf import settings
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
