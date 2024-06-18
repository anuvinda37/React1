from django.urls import path
from .views import RegisterView, LoginView
from django.urls import path
from .consumers import LocationConsumer

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('ws/location/', LocationConsumer.as_asgi()),

]

# location_tracker/urls.py


websocket_urlpatterns = [
]
