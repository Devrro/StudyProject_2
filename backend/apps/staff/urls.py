from django.urls import path

from .views import (
    DoctorAddPatientsView,
    DoctorAddSpecializationsView,
    DoctorCreateView,
    DoctorListByID,
    DoctorByIdListPatients,
    DoctorListView,
    DoctorSpecializationsList,
)

urlpatterns = [
    path('/doctors', DoctorListView.as_view(), name='doctor_list_view'),
    path('/doctor/<int:pk>', DoctorListByID.as_view(), name='doctor_by_id'),
    path('/doctor/<int:pk>/patients', DoctorByIdListPatients.as_view(), name='doctor_by_id_patients'),
    path('/doctors_spec', DoctorSpecializationsList.as_view(), name='doctors_spec_list_view'),
    path('/add_doctor', DoctorCreateView.as_view(), name='make_user_a_doctor_view'),
    path('/add_spec_doctor/<int:pk>', DoctorAddSpecializationsView.as_view(), name='add_specialization_to_doctor'),
    path('/add_patient_doctor/<int:pk>', DoctorAddPatientsView.as_view(), name='add_patient_to_doctor')
]
