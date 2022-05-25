import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable, retry} from 'rxjs';
import {IToken} from "./models";
import { AuthService } from './modules/auth/services';

@Injectable()
export class MainInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {
    console.log('interceptor')
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const isAuthenticated = this.authService.isUserAuthenticated()
    console.log(isAuthenticated, 'isAuthenticated')
    if(isAuthenticated) {
      console.log('before', request)
      request = this.addToken(request, this.authService.getAccessToken());
      console.log('after', request)
    }
    return next.handle(request);
  }

  addToken(request: HttpRequest<any>, token: string): HttpRequest<any>{
    console.log(token, 'addToken')
    return request.clone({
      setHeaders:{ Authorization: `Bearer ${token}`}
    })
  }
}
