import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {IUserModelInfo} from "../../../models/IUser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {



  constructor(
    private UserService: UserService
  ) {

  }

  ngOnInit(): void {

  }

}
