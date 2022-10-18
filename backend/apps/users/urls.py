from django.urls import path

from apps.users.views import UserListView, UserListSelfView, UserListByIdView, UserCreateView

urlpatterns = [
    path('', UserCreateView.as_view(), name='users'),
    path('/all', UserListView.as_view(), name='users'),
    path('/me', UserListSelfView.as_view(), name='user_self'),
    path('/user/<int:pk>', UserListByIdView.as_view(), name='user_by_id')
]
