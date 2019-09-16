import { Component } from '@angular/core';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'events-app',
  template: `
  <nav-bar></nav-bar>
  <!-- To display whatever route level component that matches the url -->
  <router-outlet></router-outlet>
  `
})
export class EventsAppComponent {
  constructor(private auth: AuthService){

  }

  ngOnInit() {
    this.auth.checkAuthenticationStatus()
  }
}
