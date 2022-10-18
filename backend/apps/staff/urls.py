from django.urls import path
from .views import DoctorListView,DoctorCreateView

urlpatterns = [
    path('/doctors', DoctorListView.as_view(), name='doctor_list_view'),
    path('/add_doctor', DoctorCreateView.as_view(), name='add_user_to_doctor_view')
]
