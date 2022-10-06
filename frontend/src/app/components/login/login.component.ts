import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {TokenStorageService} from "../../../services/token-storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup = new FormGroup({
    email: new FormControl('111@gmail.com'),
    password: new FormControl('1111')
  })
  isLoggedIn = false;
  isLoginFailed = false;
  errMsg = ''
  roles: string[] = [];

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService
  ) {
  }

  ngOnInit(): void {
    if (this.tokenStorage.getAccessToken()) {
      this.isLoggedIn = true
    }
  }

  onSubmit(): void {
    console.log(this.formLogin.getRawValue())
    const {email, password} = this.formLogin.getRawValue()
    this.authService.login(email, password).subscribe(
      {
        next: (value) => {
          this.tokenStorage.SaveTokens(value)
          this.isLoginFailed = false
          this.isLoggedIn = true
        },
        error: (err) => {
          this.errMsg = err.error.message;
          this.isLoginFailed = true
        }
      }
    )
  }
}
