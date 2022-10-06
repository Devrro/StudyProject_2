import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.sass']
})
export class BoardAdminComponent implements OnInit {

  content?:any[];

  constructor(
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      {
        next:(data)=>{
          this.content = data.results
        },
        error:(err)=>{
          this.content = [err.error.message]
        }
      }
    )
  }

}
