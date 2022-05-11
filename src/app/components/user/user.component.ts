import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../models/IUser";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: IUser;

  constructor() {
    this.user = {
      id: 1,
      name: '',
      username: '',
      email: ''
    }
  }


  ngOnInit(): void {
  }

}