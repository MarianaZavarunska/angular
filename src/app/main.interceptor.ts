import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import {catchError, switchMap} from 'rxjs/operators'
import { Observable, throwError} from 'rxjs';
import {Router} from "@angular/router";

import {IToken} from "./models";
import { AuthService } from './modules/auth/services';


@Injectable()
export class MainInterceptor implements HttpInterceptor {
  private isRefreshing = false

  constructor(private authService: AuthService, private router: Router) {
    console.log('interceptor')
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> | any{

    const isAuthenticated = this.authService.isUserAuthenticated()

    if(isAuthenticated) {
      request = this.addToken(request, this.authService.getAccessToken());
    }
    return next.handle(request).pipe(
        catchError((res: HttpErrorResponse) => {
          if(res && res.error && res.status === 401) {

            this.handleUnauthenticatedError(request, next)
          }
          return throwError(() => new Error('token invalid or expired'));
        })
    ) as any
  }

  addToken(request: HttpRequest<any>, token: string): HttpRequest<any>{
    console.log(token, 'addToken')
    return request.clone({
      setHeaders:{ Authorization: `Bearer ${token}`}
    })
  }

  handleUnauthenticatedError(request: HttpRequest<any>, next: HttpHandler): any{
    if(!this.isRefreshing){
      this.isRefreshing = true;
      return this.authService.refresh().pipe(
          switchMap((tokens:IToken) => {
            return next.handle(this.addToken(request, tokens.access))
          }),
          catchError(() => {
            this.isRefreshing = false
            this.authService.deleteTokens();
            this.router.navigate(['api/auth/login'])
            return throwError(() => new Error('token invalid or expired'))
          })
      )
    }

  }
}
