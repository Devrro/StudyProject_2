import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppDoctorCabinetRoutingModule} from "./doctor-cabinet-routing.module";
import { DoctorsPatientsComponent } from './doctor-cabinet-components/doctors-patients/doctors-patients.component';
import { DoctorAppointmentsComponent } from './doctor-cabinet-components/doctor-appointments/doctor-appointments.component';
import { DoctorCabinetComponent } from './doctor-cabinet.component';


@NgModule({
  declarations: [
    DoctorsPatientsComponent,
    DoctorAppointmentsComponent,
    DoctorCabinetComponent
  ],
  imports: [
    CommonModule,
    AppDoctorCabinetRoutingModule,
  ]
})
export class DoctorCabinetModule {
}
