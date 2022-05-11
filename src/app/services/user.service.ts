import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

import { IUser } from '../models/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>(this.url);
  }

  getUser(userId: number): Observable<IUser> {
    return this.http.get<IUser>(`${this.url}/${userId} `);
  }
}
