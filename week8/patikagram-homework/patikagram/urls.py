from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from main.views import UserViewSet, PostViewSet, LikeViewSet, CommentViewSet


router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'posts', PostViewSet)
router.register(r'likes', LikeViewSet)
router.register(r'comments', CommentViewSet)



urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
]
