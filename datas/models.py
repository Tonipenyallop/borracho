
from django.db import models


class favorites(models.Model):
    name = models.CharField()
    name = models.CharField(max_length=100)
    url = models.CharField(max_length=300)
    description = models.CharField(max_length=300)
    vintage = models.IntegerField()

    def __str__(self):
        return self.name