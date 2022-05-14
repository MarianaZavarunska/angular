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
   id : number;
   user: IUser;

  constructor( private activatedRoute: ActivatedRoute, private  userService: UserService) {}


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => this.user = history.state.data);
  }



}
