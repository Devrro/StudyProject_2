import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {UserGuard} from "../services/guards/user.guard";
import {ProfileComponent} from "./components/profile/profile.component";
import {ProfilePageComponent} from "./components/profile/profile-page/profile-page.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent, canActivate: [UserGuard]},

  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [],
    children: [
      {path: 'info', component: ProfilePageComponent},
      {
        path: 'cabinet',
        loadChildren: () => import('./modules/doctor-cabinet/doctor-cabinet.module').then(m => m.DoctorCabinetModule),
        canActivate:[]
      },
    ]
  },
  {path: 'register', component: RegisterComponent, canActivate: [UserGuard]},
  {path: 'patient', component: HomeComponent},
  {path: 'admin', component: HomeComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
