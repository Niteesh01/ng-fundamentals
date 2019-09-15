import { EventService } from './../shared/event.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class EventRouteActivator implements CanActivate {
  constructor(private eventService:EventService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot) {

    // use !! to cast anything to a boolean
    const eventExists = !!this.eventService.getEvent(+route.params['id'])

    if(!eventExists)
      this.router.navigate(['/404'])
    return eventExists
  }
}
