from django.shortcuts import render

from .models import Service
from .serializers import ServiceSerializer
from rest_framework import generics


class ServiceListCreate(generics.ListCreateAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer


class ServiceList(generics.ListAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
