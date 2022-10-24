from django.urls import path

from apps.users.views import UserCreateView, UserListByIdView, UserListSelfView, UserListUpdateRolesView, UserListView

urlpatterns = [
    path('', UserCreateView.as_view(), name='users'),
    path('/all', UserListView.as_view(), name='users'),
    path('/me', UserListSelfView.as_view(), name='user_self'),
    path('/user/<int:pk>', UserListByIdView.as_view(), name='user_by_id'),
    path('/user/<int:pk>/user_role', UserListUpdateRolesView.as_view(), name='list_user_role_by_id'),
    path('/user/<int:pk>/add_role_to_user/<int:role_code>', UserListUpdateRolesView.as_view(), name='add_role_to_user'),
]
