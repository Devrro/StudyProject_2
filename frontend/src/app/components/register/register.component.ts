import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {FormControl, FormGroup} from "@angular/forms";
import {IUserModel} from "../../../models/IUser";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = new FormGroup(
    {
      email: new FormControl('118@gmail.com'),
      password: new FormControl('111111'),
      first_name: new FormControl('serhiy'),
      second_name: new FormControl('terlotskiy'),
      last_name: new FormControl('andriy'),
      age: new FormControl('18'),

    }
  );
  isSuccessful: boolean = true
  isSignUpFailed: boolean = false
  errMsg: string = '';

  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {
  }

  onSubmit() {
    let user = this.registerForm.getRawValue()
    let user_formatted: IUserModel = {
      email: user.email,
      password: user.password,
      profile: {
        first_name: user.first_name,
        second_name: user.second_name,
        last_name: user.last_name,
        age: user.age,
      }
    }
    console.log(user_formatted)
    this.authService.register(user_formatted).subscribe({
      next:(value) => {
        console.log(user_formatted)
        console.log(value)
        this.isSuccessful = true
        this.isSignUpFailed = false
      },
      error:(err)=>{
        console.log(err)
        this.errMsg = err.error.message
        this.isSignUpFailed = true
      }
      }
    )
  }
}
