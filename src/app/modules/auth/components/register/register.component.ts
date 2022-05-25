import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {AuthService} from "../../services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 form: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
      this._createForm();
  }

  ngOnInit(): void {
  }

  _createForm():void{
    this.form = new FormGroup( {
        username: new FormControl(null, [Validators.minLength(2),Validators.maxLength(20)]),
        password: new FormControl(null, [Validators.minLength(2),Validators.maxLength(20)]),
        confirmPassword: new FormControl(null, [Validators.minLength(2),Validators.maxLength(20)]),
    });
  }

  register(): void {
      const rawValue = this.form.getRawValue();
      delete rawValue.confirmPassword;

        this.authService.register(rawValue).subscribe(() => {
            this.router.navigate(['login'])
        })
    }
}
