import {Component, Input, OnInit} from '@angular/core';
import {IUserModelInfo} from "../../../../models/IUser";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass'],
  host:{
    class:'disp_contents'
  }
})
export class UserComponent implements OnInit {

  @Input()
  user?: IUserModelInfo;

  constructor() {
  }

  ngOnInit(): void {
  }

}
