from rest_framework import serializers
from datas.models import Favorites


class BorrachoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favorites
        fields = '__all__'
