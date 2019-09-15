

import { appRoutes } from './routes';

import {  TOASTR_TOKEN, Toastr, JQ_TOKEN, CollapsibleWellComponent, SimpleModalComponent, ModalTriggerDirective} from './common/index'

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EventsAppComponent } from './events-app.component'
import { NavBarComponent } from './nav/navbar.component'

import { RouterModule } from '@angular/router';

import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { AuthService } from './user/auth.service'
import { FormsModule,ReactiveFormsModule} from '@angular/forms'


import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  UpvoteComponent,
  DurationPipe,
  VoterService,
  LocationValidator

} from './events/index'

let toastr:Toastr = window['toastr']
let jQuery = window['$']

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    SimpleModalComponent,
    UpvoteComponent,
    ModalTriggerDirective,
    DurationPipe,
    LocationValidator
  ],

  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EventService, EventRouteActivator, EventListResolver, AuthService, VoterService,
  { provide: TOASTR_TOKEN,
   useValue: toastr },
   { provide: JQ_TOKEN,
    useValue: jQuery },
  {
    provide: 'canDeactivateCreateEvent',
    useValue: checkDirtyState
  }],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if(component.isDirty)
   {return window.confirm('You have not saved this event, do you really want to cancel?')}
  return true

}
