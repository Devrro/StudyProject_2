import {Injectable} from '@angular/core';
import {IUserModelInfo} from "../models/IUser";
import {AuthService} from "./auth.service";



@Injectable({
  providedIn: 'root'
})

export class TokenStorageService {

  constructor(
    private authService:AuthService
  ) {
  }



}
