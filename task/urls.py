from . import views
from django.conf.urls import url


urlpatterns = [
    url(r'^$', views.home, name='home'),
    #url(r'^itop$', views.itop, name='itop'),
    #url(r'^$', views.login, name='login'),
]