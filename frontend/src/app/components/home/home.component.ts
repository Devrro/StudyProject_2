import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {IUserModel} from "../../../models/IUser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  list_of_users?: IUserModel[];

  constructor(
    private UserService: UserService
  ) {
  }

  ngOnInit(): void {
    this.UserService.getUsers().subscribe({
      next: (data) => {
        this.list_of_users = data.results
      },
      error: (err) => {
        this.list_of_users = JSON.parse(err.error.message)
      }
    })
  }

}
