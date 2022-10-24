from django.urls import path

from apps.UserRoles.views import RoleListView

urlpatterns = [
    path('', RoleListView.as_view(), name='user_roles_list')
]
