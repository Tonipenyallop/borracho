"""borracho URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from http.client import HTTPResponse
from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView
from .views import add_wine, read_wine, all_wines, wine, new_img, create_checkout_session

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='index.html')),
    path('add_wine/', add_wine),
    path('read_wine/', read_wine),
    path('all_wines/', all_wines),
    path('wine/', wine),
    path('new_img/', new_img),
    path('create-checkout-session/', create_checkout_session),
]
