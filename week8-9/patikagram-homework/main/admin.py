from django.contrib import admin
from .models import Post, Like, Comment

class PostAdmin(admin.ModelAdmin):
  list_display = ['author', "content",'created_at', "likes_count", "comments_count"]
  list_filter = ["author","created_at"]
  search_fields = ["content", "author__username"]
  autocomplete_fields = ["author"]

class LikeAdmin(admin.ModelAdmin):
  list_display = ["post", "user", "created_at"]
  list_filter = ["created_at"]
  autocomplete_fields = ["user", "post"]


class CommentAdmin(admin.ModelAdmin):
  list_display = ["content", "user", "created_at"]
  list_filter = ["created_at"]
  autocomplete_fields = ["user", "post"]


admin.site.register(Post, PostAdmin)
admin.site.register(Like, LikeAdmin)
admin.site.register(Comment, CommentAdmin)


# Register your models here.
