from django.conf.urls import url, include
from django.contrib import admin
from graphene_django.views import GraphQLView
from api.query import schema

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^api/v1/', include('api.urls')),
    url(r'^graphql', GraphQLView.as_view(graphiql=True, schema=schema))
]