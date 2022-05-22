import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IUser } from 'src/app/models/user.interface';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: IUser;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['user'] as IUser;
      if(state) {
        this.user = state;
      } else {
        this.userService.getUser(id).subscribe(user => this.user = user);
      }
    })
  }

}
