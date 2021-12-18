from rest_framework import viewsets
from django.contrib.auth.models import User
from .models import Post, Like, Comment
from .serializer import UserSerializer, PostSerializer, LikeSerializer, CommentSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import action
from rest_framework.response import Response


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated]

    @action(detail=True, methods=['post'])
    def like(self, request, pk = None):
        post = self.get_object()
        likeObject = Like.objects.get_or_create(post=post, user=request.user)
        serializer = LikeSerializer(likeObject[0])
        return Response({'status': 'liked'})



class LikeViewSet(viewsets.ModelViewSet):
    queryset = Like.objects.all()
    serializer_class = LikeSerializer

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

