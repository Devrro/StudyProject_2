import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {TokenStorageService} from "../../../services/token-storage.service";
import {IUserModel} from "../../../models/IUser";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  currentUser: IUserModel;

  constructor(
    private userService: UserService,
    private tokenStorageService: TokenStorageService
  ) {
  }

  ngOnInit(): void {
    this.userService.getMeUser().subscribe({
      next:(value)=>{
        const user:IUserModel = value.results[0]
        this.tokenStorageService.saveUser(user)
      },
      error:(value)=>{}
    })
  }

}
