import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";


const routes:Routes = [
    // {path: '', component: LayoutComponent, children:
    //     [
    //         { path: 'cars', loadChildren: () => import('./modules/cars/cars.module').then(c => c.CarsModule)},
    //         { path: 'api/auth', loadChildren: () => import('./modules/auth/auth.module').then(c => c.AuthModule)},
    //     ]
    // }
    {path: '', redirectTo:'api/auth', pathMatch: "full"},
    { path: 'cars', loadChildren: () => import('./modules/cars/cars.module').then(c => c.CarsModule)},
    { path: 'api/auth', loadChildren: () => import('./modules/auth/auth.module').then(c => c.AuthModule)},
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})


export class AppRoutingModule{}
