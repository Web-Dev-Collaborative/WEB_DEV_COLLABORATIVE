from django.db import models
from django.contrib.auth.models import User

class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Task(models.Model):
    title = models.CharField(max_length=200)
    completed = models.BooleanField()
    user = models.ForeignKey(User, related_name='tasks', on_delete=models.CASCADE)
    category = models.ForeignKey(Category, related_name='tasks', on_delete=models.CASCADE)

    def __str__(self):
        return self.title

class Food(models.Model):
    title = models.CharField(max_length=200)
    user = models.ForeignKey(User, related_name='foods', on_delete=models.CASCADE)

    def __str__(self):
        return self.title

class City(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name