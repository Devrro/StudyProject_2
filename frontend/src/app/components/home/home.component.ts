import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  content?: any[];

  constructor(
    private UserService: UserService
  ) {
  }

  ngOnInit(): void {
    this.UserService.getUsers().subscribe({
      next: (data) => {
        let arr = []
        for (let i = 0; i < data.results.length; i++) {
          arr.push(JSON.stringify(data.results[i]))
        }
        this.content = arr
      },
      error: (err) => {
        this.content = JSON.parse(err.error.message)
      }
    })
  }

}
