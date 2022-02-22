
from django.db import models
from django.apps import apps


class Favorites(models.Model):

    name = models.CharField(max_length=100)
    url = models.CharField(max_length=300)
    description = models.CharField(max_length=300)
    vintage = models.IntegerField()

    # def __str__(self):
    #     Model = apps.get_model('datas', 'Favoritas')
    #     return Model.objects.all()
