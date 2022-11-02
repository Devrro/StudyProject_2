import {Injectable} from '@angular/core';
import {IUserModelInfo} from "../models/IUser";
import {AuthService} from "./auth.service";

const TOKEN_KEY = 'auth_token'
const REFRESH_KEY = 'refresh_token'
const USER_KEY = 'auth_user'


@Injectable({
  providedIn: 'root'
})

export class TokenStorageService {

  constructor(
    private authService:AuthService
  ) {
  }

  signOut() {
    this.authService.UserIsLogged.next(false)
    window.sessionStorage.clear();
  }

  public SaveTokens(tokens: { access: string, refresh: string }) {
    window.sessionStorage.setItem(TOKEN_KEY, tokens.access)
    window.sessionStorage.setItem(REFRESH_KEY, tokens.refresh)
  }

  public getAccessToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY)
  }

  public getRefreshToken(): string | null {
    return window.sessionStorage.getItem(REFRESH_KEY)
  }

  public saveUser(user: IUserModelInfo): void {
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user))
  }

  public getUser(): IUserModelInfo | void {
    const user = window.sessionStorage.getItem(USER_KEY)
    if (user) {
      return JSON.parse(user)
    }
  }

}
