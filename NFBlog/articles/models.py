from django.utils.text import slugify
from django.db.models.signals import pre_save, m2m_changed
from django.dispatch import receiver
from django.contrib.auth import get_user_model

from django.urls import reverse

from django.db import models

User = get_user_model()


class Team(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(blank=True, unique=True)

    def __str__(self):
        return self.name


class Person(models.Model):
    name = models.CharField(max_length=10)
    age = models.PositiveIntegerField()
    bio = models.TextField(blank=True)
    profile_picture = models.ImageField(upload_to='profile_pictures', blank=True)
    is_special = models.BooleanField(default=False)
    teams = models.ManyToManyField(Team, related_name="members", blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    slug = models.SlugField(blank=True, unique=True)
    creator = models.ForeignKey(User, blank=True, null=True, on_delete=models.CASCADE)
    liked_by = models.ManyToManyField(User, related_name="squad", blank=True)
    likes = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('person', args=[self.slug])

    def get_profile_picture(self):
        if self.profile_picture and hasattr(self.profile_picture, 'url'):
            return self.profile_picture.url
        return 'http://lorempixel.com/400/200/people'

    class Meta:
        ordering = ['name']
        verbose_name_plural = 'people'


@receiver(m2m_changed, sender=Person.liked_by.through)
def update_likes(sender, instance, **kwargs):
    instance.likes = instance.liked_by.all().count()
    instance.save()


def create_slug(instance, Model, field_name, new_slug=None):
    slug = new_slug or slugify(getattr(instance, field_name), allow_unicode=True)
    qs = Model.objects.filter(slug=slug).order_by('-id')
    if qs.exists():
        new_slug = f'{slug}-{qs.first().id}'
        return create_slug(instance, Model, field_name, new_slug=new_slug)
    return slug


@receiver(pre_save, sender=Person)
def add_slug_to_person(sender, instance, **kwargs):
    if not instance.slug:
        instance.slug = create_slug(instance, sender, 'name')


@receiver(pre_save, sender=Team)
def add_slug_to_team(sender, instance, **kwargs):
    if not instance.slug:
        instance.slug = create_slug(instance, sender, 'name')
