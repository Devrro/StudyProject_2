import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {TokenStorageService} from "../../../services/token-storage.service";
import {IUserModelInfo} from "../../../models/IUser";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  currentUser: IUserModelInfo;

  constructor(
    private userService: UserService,
    private tokenStorageService: TokenStorageService
  ) {
  }

  ngOnInit(): void {
    this.userService.getMeUser().subscribe({
      next:(value)=>{
        const user:IUserModelInfo = value.results[0]
        this.tokenStorageService.saveUser(user)
      },
      error:(value)=>{}
    })
  }

}
