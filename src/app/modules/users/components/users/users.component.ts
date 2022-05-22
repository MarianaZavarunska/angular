import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {IUser} from "../../../../models/user.interface";



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: IUser[]

  constructor( private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.userService.getUsers().subscribe(users => this.users = users);
    this.activatedRoute.data.subscribe(({users}) =>  this.users = users)
  }

}
