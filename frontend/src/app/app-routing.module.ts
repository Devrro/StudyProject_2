import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {BoardUserComponent} from "./components/board-user/board-user.component";
import {UserGuard} from "../services/guards/user.guard";

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent,canActivate:[UserGuard]},
  {path:'register',component:RegisterComponent,canActivate:[UserGuard]},
  {path:'user',component:BoardUserComponent},
  {path:'patient',component:HomeComponent},
  {path:'admin',component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
