from nturl2path import url2pathname
from operator import mod
from unicodedata import name
from django.db import models


class favorites(models.Model):
    name = models.CharField()
    # name = models.CharField(max_length=100)
    # url = models.CharField(max_length=300)
    # description = models.CharField(max_length=300)
    # vintage = models.IntegerField()
