from django.urls import path
from todo_api import views

urlpatterns = [
    path("notes/", views.TodoNoteListCreate.as_view(), name="note-list"),
    path("notes/delete/<int:pk>/", views.TodoNoteDelete.as_view(), name="note-delete"),
]
