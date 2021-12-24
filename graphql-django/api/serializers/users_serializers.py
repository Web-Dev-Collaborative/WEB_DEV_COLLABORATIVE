from django.contrib.auth.models import User
from rest_framework import serializers
from tasks.serializers.tasks_serializers import TaskSerializer

class UserListSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'is_staff', 'tasks')

class UserDetailSerializer(serializers.ModelSerializer):

    tasks = TaskSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'is_staff', 'tasks')