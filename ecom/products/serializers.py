from rest_framework import serializers
from .models import Product


class ProductSerializer(serializers.ModelSerializer):
    kind = serializers.CharField(source = 'get_kind_display')
    # print(kind)
    class Meta:

        model = Product
        fields = ['image', 'name', 'kind',
                  'price', 'description', 'is_featured']

    '''
    def to_representation(self, instance):
        """Convert `username` to lowercase."""
        ret = super().to_representation(instance)
        if ret['kind'] == "1":
            ret['kind'] = 'Electronic'
        if ret['kind'] == "2":
            ret['kind'] = 'Furniture'
        if ret['kind'] == "3":
            ret['kind'] = 'Bedroom'
        if ret['kind'] == "4":
            ret['kind'] = 'Dining'
        #ret['username'] = ret['username'].lower()
        return ret
    '''