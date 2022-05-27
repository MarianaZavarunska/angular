import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { CarsComponent, CarComponent} from './components';
import {CarsRoutingModule} from "./cars-routing.module";
import { CarsService } from './services';
import {MainInterceptor} from "../../main.interceptor";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "../../http.module";


@NgModule({
  declarations: [
    CarsComponent,
    CarComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [
      CarsService,
    {
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: MainInterceptor}
  ]
})
export class CarsModule { }
