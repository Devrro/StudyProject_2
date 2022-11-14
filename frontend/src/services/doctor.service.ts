import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUserModelInfo} from "../models/IUser";
import * as http from "http";
import {IResponse} from "../models/IResponse";
import {doctors_urls} from "../constants/url.constants";

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(
    private http: HttpClient
  ) {
  }

  getPatients(doctorID: number, page: number = 0, count: number = 10): Observable<IResponse<IUserModelInfo>> {
    return this.http.get<IResponse<IUserModelInfo>>(`${doctors_urls}/${doctorID}/patients`, {
      params:{
        page,
        count
      }
    })
  }

}
