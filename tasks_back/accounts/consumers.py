import json
from channels.generic.websocket import WebsocketConsumer

class LocationConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()

    def disconnect(self, close_code):
        pass

    def receive(self, text_data):
        data = json.loads(text_data)
        latitude = data.get('latitude')
        longitude = data.get('longitude')
        
        # Process the received location data here (e.g., save it to the database)
        print(f"Received location: Latitude={latitude}, Longitude={longitude}")

    def send_message(self, message):
        self.send(text_data=json.dumps(message))