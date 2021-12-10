from rest_framework import serializers
from tasks.models import Task
#from tasks.serializers.categories_serializers import CategorySerializer

class TaskSerializer(serializers.ModelSerializer):

    #category = CategorySerializer(many=True, read_only=True)

    class Meta:
        model = Task
        fields = ('id', 'title', 'completed', 'user', 'category')