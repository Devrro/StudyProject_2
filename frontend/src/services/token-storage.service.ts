import {Injectable} from '@angular/core';
import {IUserModel} from "../models/IUser";

const TOKEN_KEY = 'auth_token'
const REFRESH_KEY = 'refresh_token'
const USER_KEY = 'auth_user'


@Injectable({
  providedIn: 'root'
})

export class TokenStorageService {

  constructor() {
  }

  signOut() {
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

  public saveUser(user: IUserModel): void {
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user))
  }

  public getUser(): IUserModel | {} {
    const user = window.sessionStorage.getItem(USER_KEY)
    if (user) {
      return JSON.parse(user)
    }
    return {};
  }

}
