import graphene
from graphene_django.types import DjangoObjectType
from tasks.models import Category

class CategoryType(DjangoObjectType):
    class Meta:
        model = Category

class CategoryQuery(graphene.AbstractType):

    category = graphene.Field(CategoryType, id=graphene.Int())
    all_categories = graphene.List(CategoryType)

    def resolve_all_categories(self, args, context, info):
        return Category.objects.all()

    def resolve_category(self, args, context, info):
        id = args.get('id')

        if id is not None:
            return Category.objects.get(pk=id)

        return None
