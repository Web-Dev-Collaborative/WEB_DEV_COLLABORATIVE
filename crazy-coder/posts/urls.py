from django.urls import path, include
from posts import views



urlpatterns = [
    path('<slug:slug>/', views.PostDetail.as_view(), name='post_detail'),
]
