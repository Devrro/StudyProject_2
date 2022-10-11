import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HTTP_INTERCEPTORS, HttpErrorResponse
} from '@angular/common/http';
import {BehaviorSubject, catchError, Observable, throwError} from 'rxjs';
import {TokenStorageService} from "../token-storage.service";

const TOKEN_HEADER_TYPE = 'Authorization'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  isRefreshing = false
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(
    private tokenStorage: TokenStorageService
  ) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authReq = request
    const token = this.tokenStorage.getAccessToken();
    if (token != null) {
      authReq = this.AddTokenHeader(request, token)
    }
    return next.handle(authReq).pipe(catchError(error=>{})

    )
  }

  private AddTokenHeader(request: HttpRequest<unknown>, token: string) {
    return request.clone({headers: request.headers.set(TOKEN_HEADER_TYPE, 'Bearer ' + token)})
  }

  handle401error(request: HttpRequest<any>, handler: HttpHandler) {

  }
}

export const AuthServiceProvider = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }
]
