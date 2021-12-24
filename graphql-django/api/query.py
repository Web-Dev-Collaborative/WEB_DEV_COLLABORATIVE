from graphene import ObjectType, Schema
from django.contrib.auth.models import User

from api.schemas.user_schema import UsersQuery
from tasks.schemas.category_schema import CategoryQuery
from tasks.schemas.task_schema import TasksQuery

class Query(CategoryQuery, TasksQuery, UsersQuery, ObjectType):
    # This class will inherit from multiple Queries
    # as we begin to add more apps to our project
    pass

schema = Schema(query=Query)