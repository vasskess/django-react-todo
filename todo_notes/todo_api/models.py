from django.db import models
from django.contrib.auth.models import User


class TodoNote(models.Model):
    TITLE_LENGTH = 100
    CONTETN_LENGTH = 1550

    title = models.CharField(max_length=TITLE_LENGTH)
    content = models.TextField(max_length=CONTETN_LENGTH)
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="notes")

    def __str__(self):
        return self.title
