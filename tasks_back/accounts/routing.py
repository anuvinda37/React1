# routing.py

from channels.routing import ProtocolTypeRouter, URLRouter
from django.urls import path
from .consumers import LocationConsumer

application = ProtocolTypeRouter({
    "websocket": URLRouter([
        path("ws/location/", LocationConsumer.as_asgi()),
    ]),
})
