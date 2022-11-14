import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {IUserModelInfo} from "../../../models/IUser";
import {AuthService} from "../../../services/auth.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  pageProfile: boolean = true
  _userIsDoc: boolean = false
  currentUser: IUserModelInfo;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private AC: ActivatedRoute,
    private router: Router,
  ) {
  }


  ngOnInit(): void {


    const user = this.authService.getUser()

    if (user) {
      this.currentUser = user
      user.user_role.some(value => {
        this._userIsDoc = (value.role === 'doctor')
      })
    } else {
      this.getUser()
    }
  }


  getUser(): void {
    this.userService.getMeUser().subscribe({
      next: (value) => {
        const user: IUserModelInfo = value.results[0]
        this.currentUser = user
        this.authService.saveUser(user)
      },
      error: (value) => {
        console.log('Profile model error')
      }
    })
  }
}
