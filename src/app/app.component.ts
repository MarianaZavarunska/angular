import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import { AuthService } from './modules/auth/services';

@Component({
  selector: 'app-root',
  template:"<router-outlet></router-outlet>"
})

// If we have token, then redirect to login component

export class AppComponent implements OnInit{

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    if(this.authService.isUserAuthenticated()){
      this.router.navigate(['cars']);
    }
  }
}
