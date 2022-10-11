import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {user_urls} from '../constants/url.constants'
import {IUserModel} from "../models/IUser";
import {ITokenPair} from "../models/ITokenPair";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) {
  }

  login(email: string, password: string): Observable<ITokenPair> {
    return this.http.post<ITokenPair>(`${user_urls.login}`, {email:email, password:password})
  }

  register(user:IUserModel):Observable<any>{
    return this.http.post(`${user_urls.register}`, {...user})
  }

  refreshToken(token:string):Observable<ITokenPair>{
    return this.http.post<ITokenPair>(`${user_urls.refresh}`, token)
  }

}
