import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CarsComponent, CarComponent} from './components';
import {CarsRoutingModule} from "./cars-routing.module";


@NgModule({
  declarations: [
    CarsComponent,
    CarComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    HttpClientModule
  ]
})
export class CarsModule { }
