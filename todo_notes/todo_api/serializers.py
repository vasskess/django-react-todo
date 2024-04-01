from django.contrib.auth.models import User
from rest_framework import serializers as srzl

from todo_api.models import TodoNote


class UserSerializer(srzl.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user


class TodoNoteSerializer(srzl.ModelSerializer):
    class Meta:
        model = TodoNote
        fields = ["id", "title", "content", "created_at", "author"]
        extra_kwargs = {"author": {"read_only": True}}
