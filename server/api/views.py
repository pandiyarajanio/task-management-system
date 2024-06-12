from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from .models import Employee
from .serializers import EmployeeSerializer, EmployeeRegisterSerializer, AdminLoginSerializer
from rest_framework import viewsets
from .models import Department, User, Task, Event, StatusUpdateRequest
from .serializers import DepartmentSerializer, UserSerializer, TaskSerializer, EventSerializer, StatusUpdateRequestSerializer
# Create your views here.

class EmployeeRegisterAPI(generics.GenericAPIView):
    serializer_class = EmployeeRegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class EmployeeLoginAPI(generics.GenericAPIView):
    serializer_class = EmployeeSerializer

    def post(self, request, *args, **kwargs):
        email = request.data.get('email')
        password = request.data.get('password')
        employee = Employee.objects.filter(email=email, password=password).first()
        if employee:
            serializer = self.get_serializer(employee)
            return Response(serializer.data)
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

class AdminLoginAPI(generics.GenericAPIView):
    serializer_class = AdminLoginSerializer

    def post(self, request, *args, **kwargs):
        email = request.data.get('email')
        password = request.data.get('password')
        # Check if email and password match the admin's static credentials
        if email == "admin@example.com" and password == "adminpassword":
            return Response({'message': 'Admin login successful'})
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

class DepartmentViewSet(viewsets.ModelViewSet):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# class TaskViewSet(viewsets.ModelViewSet):
#     queryset = Task.objects.all()
#     serializer_class = TaskSerializer

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    def perform_update(self, serializer):
        instance = serializer.save()
        if instance.status_update_approved:
            instance.task_status = instance.status_update_request.new_status
            instance.status_update_request.approved = True
            instance.status_update_request.save()
            instance.save()


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class StatusUpdateRequestViewSet(viewsets.ModelViewSet):
    queryset = StatusUpdateRequest.objects.all()
    serializer_class = StatusUpdateRequestSerializer

