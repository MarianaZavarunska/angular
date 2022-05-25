import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent, RegisterComponent } from './components';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from './services';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers:[
      AuthService,
  ]
})
export class AuthModule { }
