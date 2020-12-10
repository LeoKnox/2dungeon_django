from django.db import models

class Room(models.Model):
    name = models.CharField("Name", max_length=75)
    description = models.CharField(max_length=240)
    width = models.IntegerField()
    height = models.IntegerField()
    floor = models.CharField(max_length=5)
    doors = models.ManyToManyField('Door')

    def __str__(self):
        return self.name

class Door(models.Model):
    door_one = models.IntegerField()
    door_two = models.IntegerField()

    def __str__(self):
        return self.name