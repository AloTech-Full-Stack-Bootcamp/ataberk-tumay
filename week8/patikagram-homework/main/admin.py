from django.contrib import admin
from .models import Post, Like, Comment

class PostAdmin(admin.ModelAdmin):
  list_display = ['author', "content",'created_at']

class LikeAdmin(admin.ModelAdmin):
  list_display = ["post", "user", "created_at"]

class CommentAdmin(admin.ModelAdmin):
  list_display = ["post", "user", "created_at"]

admin.site.register(Post, PostAdmin)
admin.site.register(Like, LikeAdmin)
admin.site.register(Comment, CommentAdmin)


# Register your models here.
