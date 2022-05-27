import { Component, OnInit } from '@angular/core';
import {
    AbstractControl,
    FormControl,
    FormGroup,
    ValidationErrors,
    Validators
} from '@angular/forms';

import {AuthService} from "../../services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 form: FormGroup;
 formUserNameError: string;

  constructor(private authService: AuthService, private router: Router) {
      this._createForm();
  }

  ngOnInit(): void {
  }

  _createForm():void{
    this.form = new FormGroup( {
        username: new FormControl(null, [Validators.required, Validators.minLength(2),Validators.maxLength(20)]),
        password: new FormControl(null, [Validators.required, Validators.minLength(2),Validators.maxLength(20)]),
        confirmPassword: new FormControl(null, [Validators.required, Validators.minLength(2),Validators.maxLength(20)]),
    }, [this._checkPassword]);
  }

  register(): void {
      const formData = this.form.getRawValue();
      delete formData.confirmPassword;


        this.authService.register(formData).subscribe( {
            next:  () => {

                this.router.navigate(['api/auth/login'])
            },
            error: (e) =>  {
                console.log(e)
                this.formUserNameError = e.error.username[0];
            },
        })

  }

  _checkPassword(form: AbstractControl):ValidationErrors|null{
      const password = form.get('password');
      const confirmPassword = form.get('confirmPassword');
      return confirmPassword?.value === password?.value ? null : {different: "Passwords don't match"};

  }
}
