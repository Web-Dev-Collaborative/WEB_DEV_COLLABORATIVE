import graphene
from graphene_django.types import DjangoObjectType
from django.contrib.auth.models import User

class UserType(DjangoObjectType):
    class Meta:
        model = User

class UsersQuery(graphene.AbstractType):
    user = graphene.Field(UserType, id=graphene.Int())
    all_users = graphene.List(UserType)

    def resolve_all_users(self, args, context, info):
        return User.objects.all()

    def resolve_user(self, args, context, info):
        id = args.get('id')

        if id is not None:
            return User.objects.get(pk=id)

        return None