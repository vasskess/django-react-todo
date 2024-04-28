from django.contrib.auth.models import User
from rest_framework import generics as gsc
from todo_api.serializers import UserSerializer, TodoNoteSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from todo_api.models import TodoNote


class CreateUserView(gsc.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


class TodoNoteListCreate(gsc.ListCreateAPIView):
    serializer_class = TodoNoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return TodoNote.objects.filter(author=user)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)


class TodoNoteDelete(gsc.DestroyAPIView):
    serializer_class = TodoNoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return TodoNote.objects.filter(author=user)
