from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    pass



class Location(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    latitude = models.FloatField()
    longitude = models.FloatField()
    timestamp = models.DateTimeField(auto_now_add=True)