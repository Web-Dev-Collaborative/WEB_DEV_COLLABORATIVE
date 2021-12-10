from django.urls import path

from . import views


urlpatterns = [
    path('<slug:team_slug>', views.team, name="team"),
]
