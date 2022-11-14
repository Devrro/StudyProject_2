from django.urls import path

from apps.patients.views import ListAllPatientsView

urlpatterns = [
    path('/all', ListAllPatientsView.as_view(), name='get_all_patients')
]