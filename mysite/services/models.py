from django.db import models


class Service(models.Model):
    name = models.CharField(max_length=100)
    id = models.IntegerField(unique=True,
                             primary_key=True,)
    refer = models.CharField(max_length=100)


class ServicesList(models.Model):
    name = models.CharField(max_length=100)
    id = models.IntegerField(unique=True,
                             primary_key=True,)
