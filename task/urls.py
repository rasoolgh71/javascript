from . import views
from django.conf.urls import url


urlpatterns = [
    url(r'^home$', views.home, name='home'),
    url(r'^login$', views.login, name='login '),
    url(r'^calculate$', views.calculate, name='calculate'),
    url(r'^api$', views.api, name='api'),
    url(r'^snake$', views.snake, name='calculate1'),

]