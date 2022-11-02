import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {FormControl, FormGroup} from "@angular/forms";
import {IUserModelSignUp} from "../../../models/IUser";
import * as events from "events";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  is_doctor_checker = false
  is_patient_checker = false
  isSuccessful: boolean = true
  isSignUpFailed: boolean = false
  errMsg: string = '';

  registerForm: FormGroup = new FormGroup(
    {
      email: new FormControl('118@gmail.com'),
      password: new FormControl('111111'),
      profile: new FormGroup(
        {
          first_name: new FormControl('Serhiy'),
          second_name: new FormControl('Terletskiy'),
          last_name: new FormControl('andriy'),
          age: new FormControl('18'),
        }
      ),
      is_doctor: new FormControl(false),
      is_patient: new FormControl(false)
    }
  );


  constructor(
    private authService: AuthService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
  }

  onSubmit() {
    let user = this.registerForm.getRawValue()
    this.authService.register(user).subscribe({
        next: (value) => {
          this.isSuccessful = true
          this.isSignUpFailed = false
          this.router.navigate(['login'])
        },
        error: (err) => {
          if (err.error.email) {
            this.errMsg = 'The email is already taken'
          } else {
            this.errMsg = JSON.stringify(err)
          }
          this.isSignUpFailed = true
        }
      }
    )
  }

  checkDoctor() {
    this.is_doctor_checker = !this.is_doctor_checker
  }

  checkPatient() {
    this.is_patient_checker = !this.is_patient_checker
  }

}
