from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, NoteSerializer, CartSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Note
from django.http import HttpResponse, JsonResponse
from .models import Cart
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


# Create your views here.

class NoteListCreate(generics.ListCreateAPIView):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author = user)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)

class NoteDelete(generics.DestroyAPIView):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
       
    def get_queryset(self):
        user = self.request.user
        return user.objects().all()
    
class addCartView(generics.CreateAPIView):
    serializer_class = CartSerializer
    permission_classes = [AllowAny]

def members(request):
        return HttpResponse("Hello World!")




# @api_view(["GET", "POST"])
# def cart(request):
#     """
#     List all transactions
#     """

#     if request.method == "GET":
#         cartItems = Cart.objects.all()
#         serializer = CartSerializer(cartItems, many=True)
#         return Response(serializer.data)
#     elif request.method == "POST":
#         serializer = CartSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# @api_view(["GET", "PUT", "DELETE"])
# def cart(request, cart_id):
#     """
#     Retrieve, update or delete a transaction
#     """

#     try:
#         cart = Cart.objects.get(pk=cart_id)
#     except Cart.DoesNotExist:
#         return Response(
#             status=status.HTTP_404_NOT_FOUND, data={"error": "Transaction not found"}
#         )

#     if request.method == "GET":
#         serializer = CartSerializer(cart)
#         return Response(serializer.data)
#     elif request.method == "PUT":
#         serializer = CartSerializer(cart, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#     elif request.method == "DELETE":
#         cart.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)

    
