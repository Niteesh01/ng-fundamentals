import { Subject, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { EventService } from './shared/event.service';
import { Component, OnInit } from '@angular/core';
import { IEvent } from './shared/event.model';



@Component({
  templateUrl: './events-list.component.html'
})



export class EventsListComponent implements OnInit{
    events:IEvent[];
  constructor(private eventService:EventService, private route:ActivatedRoute){

  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events']
  }


}
