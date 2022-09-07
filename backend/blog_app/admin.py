from django.contrib import admin

from .models import Blog


class BlogAdmin(admin.ModelAdmin):
    list_display = ('title', 'author','created_at','updated_at','stars')
    search_fields = ['title', 'content']
# Register your models here.
admin.site.register(Blog, BlogAdmin)