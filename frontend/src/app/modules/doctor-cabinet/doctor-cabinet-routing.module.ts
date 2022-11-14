import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProfileComponent} from "../../components/profile/profile.component";
import * as path from "path";
import {DoctorsPatientsComponent} from "./doctor-cabinet-components/doctors-patients/doctors-patients.component";
import {
  DoctorAppointmentsComponent
} from "./doctor-cabinet-components/doctor-appointments/doctor-appointments.component";
import {DoctorCabinetComponent} from "./doctor-cabinet.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'patients', pathMatch: 'full',
  },
  {path: 'patients', component: DoctorsPatientsComponent},
  {path: 'appointments', component: DoctorAppointmentsComponent}
]

@NgModule(
  {
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  }
)
export class AppDoctorCabinetRoutingModule {
}
