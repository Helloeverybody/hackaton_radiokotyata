from django.urls import path
from . import views

urlpatterns = [
    path('api/service_create/', views.ServiceListCreate.as_view()),
    path('api/services/', views.ServiceList.as_view()),
]