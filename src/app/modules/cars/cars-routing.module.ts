import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

import {CarsComponent, CarComponent} from "./components";

const routes: Routes = [
    {
        path: '', component: CarsComponent,
        children: [
            {path: ':id', component: CarComponent}
        ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes), HttpClientModule],
    exports: [RouterModule]
})
export class CarsRoutingModule { }
