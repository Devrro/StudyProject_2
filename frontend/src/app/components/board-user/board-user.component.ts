import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {IUserModel} from "../../../models/IUser";

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.sass']
})
export class BoardUserComponent implements OnInit {

  // content?:any[];

  @Input()
  user?: IUserModel;

  constructor(
  ) { }

  ngOnInit(): void {
  }
}
