from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [

    path('login/', views.get_loged_in, name= "login"),
    path('getUser/', views.get_current_user),
    path('logout/', views.log_out, name="logout")
]