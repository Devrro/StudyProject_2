import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.sass']
})
export class BoardUserComponent implements OnInit {

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
