import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {UserService} from "../../../services/user.service";
import {IUserModelInfo} from "../../../models/IUser";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup = new FormGroup({
    email: new FormControl('doc_1@gmail.com'),
    password: new FormControl('111111')
  })
  isLoggedIn = false;
  isLoginFailed = false;
  errMsg = ''
  user: IUserModelInfo;
  roles: string[] = [];

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.authService.UserIsLogged.subscribe({next: value => this.isLoggedIn = value})
    if (this.authService.getAccessToken()) {
      const user = this.authService.getUser()
      if (user) {
        this.user = user
      }
      this.authService.UserIsLogged.next(true)
    } else {

      this.authService.UserIsLogged.next(false)
    }
  }

  onSubmit(): void {
    const {email, password} = this.formLogin.getRawValue()
    this.authService.login(email, password).subscribe(
      {
        next: (value) => {
          this.authService.SaveTokens(value)
          this.isLoginFailed = false
          this.isLoggedIn = true

          this.userService.getMeUser().subscribe({
            next: (value) => {
              let user = value.results[0]
              this.authService.saveUser(user)
              this.user = user
              this.authService.UserIsLogged.next(true)
              this.router.navigate(['/home'])
            },
            error: (err) => {
              this.authService.UserIsLogged.next(false)
              this.errMsg = err.error.message;
              this.isLoginFailed = true

            }
          })
        },
        error: (err) => {
          this.errMsg = err.error.message;
          this.isLoginFailed = true
        },
      }
    )

  }
}
