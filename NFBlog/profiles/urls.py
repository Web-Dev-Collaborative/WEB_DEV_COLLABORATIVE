from django.urls import path

from . import views

urlpatterns = [
    path('', views.profiles, name="profiles"),
    path('create_profile/<slug:profile_type>',
         views.create_profile,
         name="create_profile"),
    path('<username>', views.profile, name="profile"),
]
