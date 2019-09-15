import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
  <nav-bar></nav-bar>
  <!-- To display whatever route level component that matches the url -->
  <router-outlet></router-outlet>
  `
})
export class EventsAppComponent {
  title = 'ng-fundamentals';
}
