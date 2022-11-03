import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {user_urls} from '../constants/url.constants'
import {IUserModelInfo, IUserModelSignUp} from "../models/IUser";
import {ITokenPair} from "../models/ITokenPair";

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  public UserIsLogged: BehaviorSubject<boolean> = new BehaviorSubject(false)

  constructor(
    private http: HttpClient
  ) {
  }

  login(email: string, password: string): Observable<ITokenPair> {
    return this.http.post<ITokenPair>(`${user_urls.login}`, {email:email, password:password})
  }

  register(user:IUserModelSignUp):Observable<IUserModelInfo>{
    return this.http.post<IUserModelInfo>(`${user_urls.register}`, {...user})
  }

  refreshToken(token:string):Observable<ITokenPair>{
    return this.http.post<ITokenPair>(`${user_urls.refresh}`, {"refresh":token})
  }

}
