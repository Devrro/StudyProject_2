import {Component, OnInit} from '@angular/core';
import {IUserModelInfo} from "../../../models/IUser";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {

  formatted_list_of_users: Array<IUserModelInfo[]>;
  info_chunk_size$: number = 4;
  $error: string;

  constructor(
    private UserService:UserService
  ) {
  }

  ngOnInit(): void {
    this.UserService.getUsers().subscribe({
      next: (data) => {
        this.formatted_list_of_users = []
        for (let i = 0; i < data.results.length; i += this.info_chunk_size$) {
          const chunk = data.results.slice(i, i + this.info_chunk_size$)
          this.formatted_list_of_users.push(chunk)
        }
      },
      error: (err) => {
        this.$error = JSON.parse(err.error.message)
      }
    })
  }

}
