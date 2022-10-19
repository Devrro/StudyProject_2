from django.urls import path
from .views import DoctorListView, DoctorCreateView, DoctorAddSpecializationsView,DoctorAddPatientsView

urlpatterns = [
    path('/doctors', DoctorListView.as_view(), name='doctor_list_view'),
    path('/add_doctor', DoctorCreateView.as_view(), name='make_user_a_doctor_view'),
    path('/add_spec_doctor/<int:pk>', DoctorAddSpecializationsView.as_view(), name='add_specialization_to_doctor'),
    path('/add_patient_doctor/<int:pk>', DoctorAddPatientsView.as_view(), name='add_patient_to_doctor')
]
