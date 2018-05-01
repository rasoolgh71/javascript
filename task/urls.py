from . import views
from django.conf.urls import url


urlpatterns = [
    url(r'^home$', views.home, name='home'),
    url(r'^login$', views.login, name='login '),
    url(r'^calculate$', views.calculate, name='calculate'),
    url(r'^Es6$', views.Es6, name='Es6'),
    url(r'^snake$', views.snake, name='snake'),
    url(r'^game$', views.game, name='game'),
    url(r'^menu$', views.menu, name='menu'),

]