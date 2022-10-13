from django.urls import path

from apps.users.views import UserListView, UserListSelfView, UserListByIdView

urlpatterns = [
    path('', UserListView.as_view(), name='users'),
    path('/me', UserListSelfView.as_view(), name='user_self'),
    path('/user/<int:pk>', UserListByIdView.as_view(), name='user_by_id')
]
