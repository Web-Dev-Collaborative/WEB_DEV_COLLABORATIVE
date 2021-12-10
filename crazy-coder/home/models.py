from django.db import models

class Subscribe(models.Model):
  email = models.EmailField(max_length = 254, unique=True, blank=False)
  time = models.DateTimeField(auto_now_add=True)
  def __str__(self):
    return self.email
