from django.contrib import admin
from django.urls import path, include 
from api.views import CreateUserView,addCartView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/user/register/", CreateUserView.as_view(), name="register"),
    path("api/user/addCart/", addCartView.as_view(), name="addCart"),
    path("api/user/addCart/<int:pk>/", addCartView.as_view(), name="addCart.get_queryset"),
    path("api/token/",TokenObtainPairView.as_view(), name="get_token"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="refresh"),
    path("api-auth/", include("rest_framework.urls")),
    path("api/", include("api.urls")),
]   
