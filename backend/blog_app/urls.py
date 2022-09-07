from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.blog_view),
    path('create/',views.blog_post),
    path('<int:id>/', views.blog_detailed_view),
]