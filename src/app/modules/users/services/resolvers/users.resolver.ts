import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

import {IUser} from "../../../../models/user.interface";
import {UserService} from "../user.service";

@Injectable({
  providedIn: 'root'
})
export class UsersResolver implements Resolve<IUser[]> {

  constructor(private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser[]>| Promise<IUser[]> | IUser[] {
    return this.userService.getUsers();
  }
}
