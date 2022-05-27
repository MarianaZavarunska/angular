import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";

import {IToken, IUser} from "../../../models";
import {urls} from "../../../constants";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private accessTokenKey = 'access'
  private  refreshTokenKey = 'refresh'

  constructor(private http: HttpClient) {

  }

  register(user:IUser): Observable<IUser>{
    return this.http.post<IUser>(urls.users, user);
  }

  login(user: IUser):  Observable<IToken> {
    return this.http.post<IToken>(urls.auth, user);
  }

  refresh(): Observable<IToken> {
    const refresh = this.getRefreshToken();
    return this.http.post<IToken>(`${urls.auth}/refresh`, {refresh}).pipe(
        tap((tokens: IToken) => {
          this.setTokens(tokens)
        })
    )
  }

  setTokens(token: IToken):void{
    localStorage.setItem(this.accessTokenKey, token.access);
    localStorage.setItem(this.refreshTokenKey, token.refresh);
  }

  getAccessToken(): string{
    return localStorage.getItem(this.accessTokenKey) as string;
  }

  getRefreshToken(): string{
    return localStorage.getItem(this.refreshTokenKey) as string;
  }

  deleteTokens(): void {
    localStorage.removeItem(this.accessTokenKey)
    localStorage.removeItem(this.refreshTokenKey)
  }

  isUserAuthenticated(): boolean{
    return !!localStorage.getItem(this.accessTokenKey);
  }
}
