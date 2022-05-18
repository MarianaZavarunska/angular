import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from 'src/app/services';
import {IUser} from "../../models/IUser";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
   user: IUser;

  constructor( private activatedRoute: ActivatedRoute, private router: Router,private  userService: UserService) {
  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
        console.log(this.router.getCurrentNavigation()?.extras)
       const state =  this.router.getCurrentNavigation()?.extras?.state?.['user'] as IUser;
       console.log(this.router.getCurrentNavigation()?.extras)

     if(state) {
         this.user = state;
     } else {
         this.userService.getUser(id).subscribe(user => this.user = user)
     }
    });

  }



}
