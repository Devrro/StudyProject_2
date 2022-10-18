import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "../services/token-storage.service";
import {IUserModel} from "../models/IUser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'health_care_frontend';

  private roles: string[] = [];
  isLoggedIn: boolean = false;
  showAdminBoard: boolean = false;
  showModeratorBoard: boolean = false;
  username?: string;

  constructor(
    private tokenStorageService: TokenStorageService
  ) {
  }

  ngOnInit() {
    if (this.isLoggedIn) {
      const user: IUserModel | void = this.tokenStorageService.getUser();
      // this.roles = user.roles
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN')
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR')
      if (user) {
        if ("profile" in user) {
          this.username = user.profile.first_name
        }
      }
    }
  }

  logOut(){
    this.tokenStorageService.signOut()
    window.location.reload()
  }

}
