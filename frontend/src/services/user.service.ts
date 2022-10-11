import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUserModel} from "../models/IUser";
import {boards_url} from "../constants/url.constants";
import {IResponse} from "../models/IResponse";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http:HttpClient
  ) { }

  getUsers():Observable<IResponse<IUserModel>>{
    return this.http.get<IResponse<IUserModel>>(`${boards_url.all_users}`,)
  }
  getMeUser():Observable<IResponse<IUserModel>>{
    return this.http.get<IResponse<IUserModel>>(`${boards_url.me}`,)
  }

  getUserById(id:string):Observable<IResponse<IUserModel>>{
    return this.http.get<IResponse<IUserModel>>(`${boards_url.all_users}/id`,)
  }
}
