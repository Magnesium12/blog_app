from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Blog(models.Model):
    title = models.CharField(max_length=150,unique=True)
    author = models.ForeignKey(User, on_delete= models.CASCADE, related_name='blogs')
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    stars = models.IntegerField(default=0)

    class Meta:
        ordering = ['-stars', '-created_at']

    def __str__(self) -> str:
        return self.title
