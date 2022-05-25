import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IToken, IUser} from "../../../models";
import {urls} from "../../../constants";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private accessTokenKey = 'access'

  constructor(private http: HttpClient) {

  }

  register(user:IUser): Observable<IUser>{
    return this.http.post<IUser>(urls.users, user);
  }

  login(user: IUser):  Observable<IToken> {
    return this.http.post<IToken>(urls.auth, user);
  }

  setAccessToken(token: IToken):void{
    localStorage.setItem(this.accessTokenKey, token.access);
  }

  getAccessToken(): string{
    return localStorage.getItem(this.accessTokenKey) as string;
  }

  deleteAccessToken(): void {
    localStorage.removeItem(this.accessTokenKey)
  }

  isUserAuthenticated(): boolean{
    return !!localStorage.getItem(this.accessTokenKey);
  }
}
