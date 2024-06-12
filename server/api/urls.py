from django.urls import path, include
from .views import EmployeeRegisterAPI, EmployeeLoginAPI, AdminLoginAPI
from rest_framework.routers import DefaultRouter
from .views import DepartmentViewSet, UserViewSet, TaskViewSet, EventViewSet, StatusUpdateRequestViewSet

router = DefaultRouter()
router.register(r'departments', DepartmentViewSet)
router.register(r'users', UserViewSet)
router.register(r'tasks', TaskViewSet)
router.register(r'events', EventViewSet)
router.register(r'status-update-requests', StatusUpdateRequestViewSet)



urlpatterns = [
    path('api/employee/register/', EmployeeRegisterAPI.as_view(), name='employee_register'),
    path('api/employee/login/', EmployeeLoginAPI.as_view(), name='employee_login'),
    path('api/admin/login/', AdminLoginAPI.as_view(), name='admin_login'),
    path('', include(router.urls)),
]