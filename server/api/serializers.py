from rest_framework import serializers
from .models import Employee
from .models import Department, User, Task, Event, StatusUpdateRequest

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ['id','email', 'password']

class EmployeeRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ['id','name', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

class AdminLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()


class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'

class StatusUpdateRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = StatusUpdateRequest
        fields = '__all__'


