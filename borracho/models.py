
from django.db import models
from django.apps import apps


class Favorites(models.Model):

    name = models.CharField(max_length=100)
    url = models.CharField(max_length=300)
    description = models.CharField(max_length=300)
    vintage = models.IntegerField()
