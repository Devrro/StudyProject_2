from django.urls import path

from apps.users.views import UserListCreateView, UserListSelfView, UserListByIdView

urlpatterns = [
    path('', UserListCreateView.as_view(), name='users'),
    path('/me', UserListSelfView.as_view(), name='user_self'),
    path('/user/<int:pk>', UserListByIdView.as_view(), name='user_by_id')
]
