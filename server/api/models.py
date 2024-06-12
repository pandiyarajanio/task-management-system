from django.db import models


# Create your models here.

class Employee(models.Model):
    name = models.CharField(max_length=150)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)


from django.db import models

class Department(models.Model):
    department_name = models.CharField(max_length=100)

    def __str__(self):
        return self.department_name

class User(models.Model):
    user_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)

    def __str__(self):
        return self.user_name

class Task(models.Model):
    task_description = models.TextField()
    task_assignee = models.ForeignKey(User, on_delete=models.CASCADE)
    task_status = models.CharField(max_length=50)
    scheduled_date_time = models.DateTimeField()
    department = models.ForeignKey(Department, on_delete=models.CASCADE)

    def __str__(self):
        return self.task_description

class Event(models.Model):
    event_name = models.CharField(max_length=100)
    event_description = models.TextField()
    event_status = models.CharField(max_length=50)
    event_date_time = models.DateTimeField()

    def __str__(self):
        return self.event_name

class StatusUpdateRequest(models.Model):
    task = models.ForeignKey(Task, on_delete=models.CASCADE)
    new_status = models.CharField(max_length=20)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    approved = models.BooleanField(default=False)