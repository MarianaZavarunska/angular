import {Component, Input, OnInit} from '@angular/core';

import { IUser } from 'src/app/models/IUser';
import {UserService} from "../../services";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
   users: IUser[];
  @Input()
  user: IUser;

  constructor(private userService: UserService) {
    this.users = [];
  }


  ngOnInit(): void {
    this.userService.getUsers().subscribe(response => this.users = response);
  }

}
