import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services';

import {IUser} from "../../models/IUser";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
   user: IUser;
   users: IUser[];

  constructor( private activatedRoute: ActivatedRoute, private  userService: UserService) {
      activatedRoute.data.subscribe(value => this.users = value['users']);
  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
        if(history.state.data) this.user = history.state.data
        else if(+value['id']) this.userService.getUser(+value['id']).subscribe(user => this.user = user)
    });

  }



}
