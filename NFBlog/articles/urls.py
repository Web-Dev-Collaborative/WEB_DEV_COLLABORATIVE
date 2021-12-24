from django.urls import path

from . import views

urlpatterns = [
    path('', views.PeopleView.as_view(), name="people"),
    path('add/', views.AddPerson.as_view(), name="add_person"),
    path('<slug>', views.PersonDetail.as_view(), name="person"),
    path('<slug>/update/', views.UpdatePerson.as_view(), name="update_person"),
    path('<int:pk>/delete/', views.DeletePerson.as_view(), name="delete_person"),
    path('<person_slug>/like', views.like, name="like"),
]
