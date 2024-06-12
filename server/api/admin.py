from django.contrib import admin

from .models import Department, Task, Event, User

admin.site.register(Department)
admin.site.register(Task)
admin.site.register(Event)
admin.site.register(User)