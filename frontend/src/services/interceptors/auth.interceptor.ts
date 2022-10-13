import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HTTP_INTERCEPTORS, HttpErrorResponse
} from '@angular/common/http';
import {BehaviorSubject, catchError, filter, Observable, switchMap, take, throwError} from 'rxjs';
import {TokenStorageService} from "../token-storage.service";
import {AuthService} from "../auth.service";
import {ITokenPair} from "../../models/ITokenPair";

const TOKEN_HEADER_TYPE = 'Authorization'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  isRefreshing = false
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(
    private tokenStorage: TokenStorageService,
    private authService: AuthService
  ) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('intercepting')
    let authReq = request
    const token = this.tokenStorage.getAccessToken();
    if (token != null) {
      authReq = this.AddTokenHeader(request, token)
    }
    return next.handle(authReq).pipe(catchError(error => {

        if (error instanceof HttpErrorResponse && !authReq.url.includes('auth/signin') && error.status === 401) {
          return this.handle401error(authReq, next)
        }

        return throwError(error)
      })
    )
  }

  private AddTokenHeader(request: HttpRequest<unknown>, token: string) {
    return request.clone({headers: request.headers.set(TOKEN_HEADER_TYPE, 'Bearer ' + token)})
  }

  handle401error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true
      this.refreshTokenSubject.next(null)
      const refresh_token = this.tokenStorage.getRefreshToken()

      if (refresh_token) {
        return this.authService.refreshToken(refresh_token).pipe(
          switchMap((tokens: ITokenPair) => {
            this.isRefreshing = false

            this.tokenStorage.SaveTokens(tokens)
            this.refreshTokenSubject.next(tokens.refresh)

            return next.handle(this.AddTokenHeader(request, tokens.access))
          }),
        )
      } else {
        catchError((err) => {
          this.isRefreshing = false
          this.tokenStorage.signOut()
          return throwError(err)
        })
      }

    }
    return this.refreshTokenSubject.pipe(
      filter(token => token !== null),
      take(1),
      switchMap((token) => next.handle(this.AddTokenHeader(request, token)))
    )

  }
}

export const AuthServiceProvider = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }
]
