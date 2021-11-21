from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Service
from .serializers import ServiceSerializer
from rest_framework import generics, status


class ServiceListCreate(generics.ListCreateAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer


class ServiceList(generics.ListAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
