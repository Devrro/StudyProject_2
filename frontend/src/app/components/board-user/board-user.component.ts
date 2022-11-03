import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {IUserModelInfo} from "../../../models/IUser";

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.sass'],
  host:{
    class:'disp_contents'
  }
})
export class BoardUserComponent implements OnInit {

  // content?:any[];


  constructor(
  ) { }

  ngOnInit(): void {
  }
}
