import {Component, Input, OnInit} from '@angular/core';
import {IUserModelInfo} from "../../../../../models/IUser";
import {AuthService} from "../../../../../services/auth.service";
import {DoctorService} from "../../../../../services/doctor.service";

@Component({
  selector: 'app-doctors-patients',
  templateUrl: './doctors-patients.component.html',
  styleUrls: ['./doctors-patients.component.sass']
})
export class DoctorsPatientsComponent implements OnInit {

  _doctorInfo: IUserModelInfo

  _patients: IUserModelInfo[]

  constructor(
    private authService: AuthService,
    private doctorService: DoctorService,
  ) {
  }

  ngOnInit(): void {
    const user = this.authService.getUser()
    if (user) {
      this._doctorInfo = user
    }

    this.getPatients(this._doctorInfo.id)

  }


  getPatients(docId: number, page: number = 0, count: number = 10) {
    this.doctorService.getPatients(docId).subscribe(
      {
        next: (value) => {
          this._patients = value.results
        },
        error: err => {
          console.log(err)
        }
      }
    )
  }

}
