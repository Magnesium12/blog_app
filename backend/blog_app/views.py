from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import BlogSerializer, BlogDetailSerializer
from .models import Blog
from django.contrib.auth import authenticate, login

# Create your views here.

@api_view(['GET'])
def blog_view(request):
    """
    List all blogs.
    """
    Blogs = Blog.objects.all()
    serializer = BlogSerializer(Blogs, many=True)
    return Response(serializer.data,status=status.HTTP_200_OK)
        

@api_view(['POST'])
def blog_post(request):
    """
    Create new Blog.
    """
    serializer = BlogDetailSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def blog_detailed_view(request, id):
    """
    Gives detailed view of a Blog.
    """
    blog_id = id
    the_blog = Blog.objects.get(id = blog_id)
    serializer = BlogDetailSerializer(the_blog)
    return Response(serializer.data,status=status.HTTP_200_OK,headers={'Access-Control-Allow-Origin':"http://localhost:3000"})

def login_user(request):
    """
    Login a user
    """
    username = request.POST['username']
    password = request.POST['password']
    user = authenticate(username=username, password=password)
    if user is not None:
        if user.is_active:
            login(request, user)
            return Response(status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_409_CONFLICT)
    else:
        return Response(status=status.HTTP_401_UNAUTHORIZED)