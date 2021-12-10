from django.conf.urls import url, include
from rest_framework.urlpatterns import format_suffix_patterns

from api.views.task_views import TasksList
from api.views.task_views import TasksDetail

from api.views.user_views import UsersList
from api.views.user_views import UsersDetail

from api.views.category_views import CategoriesList
from api.views.category_views import CategoriesDetail

urlpatterns = [
    url(r'^tasks/$', TasksList.as_view()),
    url(r'^tasks/(?P<pk>[0-9]+)/$', TasksDetail.as_view()),
    url(r'^users/$',UsersList.as_view()),
    url(r'^users/(?P<pk>[0-9]+)/$',UsersDetail.as_view()),
    url(r'^categories/$',CategoriesList.as_view()),
    url(r'^categories/(?P<pk>[0-9]+)/$',CategoriesDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)