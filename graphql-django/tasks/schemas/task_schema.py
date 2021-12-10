import graphene
from graphene_django.types import DjangoObjectType
from tasks.models import Task

class TaskType(DjangoObjectType):
    class Meta:
        model = Task

class TasksQuery(graphene.AbstractType):

    task = graphene.Field(TaskType, id=graphene.Int())
    all_tasks = graphene.List(TaskType)

    def resolve_all_tasks(self, args, context, info):
        return Task.objects.all()

    def resolve_task(self, args, context, info):
        id = args.get('id')

        if id is not None:
            return Task.objects.get(pk=id)

        return None