import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import { IUser } from '../models/IUser';
import {Observable} from "rxjs";
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<IUser[]>{

  constructor(private  userService: UserService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser[]> | Promise<IUser[]> | IUser[] {
    return this.userService.getUsers();
  }
}
