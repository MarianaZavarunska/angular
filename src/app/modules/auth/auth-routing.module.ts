import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";

import {RegisterComponent, LoginComponent} from "./components";

const routes:Routes = [
    {path:"", redirectTo: "login", pathMatch: "full"},
    {path:"login", component: LoginComponent},
    {path:"register", component: RegisterComponent},
]

@NgModule({
    imports:[
        RouterModule.forChild(routes), HttpClientModule
    ],
    exports:[
        RouterModule
    ]
})

export class AuthRoutingModule{}
