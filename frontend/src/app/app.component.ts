import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "../services/token-storage.service";
import {IUserModelInfo} from "../models/IUser";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  host:{}
})
export class AppComponent implements OnInit {
  title = 'health_care_frontend';

  private roles: string[] = [];
  isLoggedIn: boolean = false;
  showDoctorsCabinet: boolean = false;
  username?: string;


  constructor(
    private tokenStorageService: TokenStorageService,
    private authService: AuthService,
  ) {
  }

  ngOnInit() {
    if (this.tokenStorageService.getAccessToken()) {
      this.roles = []
      this.authService.UserIsLogged.next(true)
      this.showDoctorsCabinet = this.roles.includes('doctor')
    } else {
      this.authService.UserIsLogged.next(false)
    }
    this.authService.UserIsLogged.subscribe({
      next: (value) => {
        this.isLoggedIn = value
        if (value) {
          let user: IUserModelInfo | void = this.tokenStorageService.getUser();
          if (user) {
            for (let obj of user.user_role) {
              this.roles.unshift(obj.role)
            }
            this.showDoctorsCabinet = this.roles.includes('doctor')
            if ("profile" in user) {
              this.username = user.profile.first_name
            }
          }
        }
      }
    })
  }

  logOut() {
    this.authService.UserIsLogged.next(false)
    this.isLoggedIn = false
    this.tokenStorageService.signOut()
    window.location.reload()
  }

}
