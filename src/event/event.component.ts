import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {Event} from "./event";
import {HttpErrorResponse} from "@angular/common/http";
import {EventService} from "./event.service";

@Component({
  selector: 'app-team',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})

export class EventComponent implements OnInit {
  public events : Event[] = [];
  constructor(private eventService : EventService) {}
  ngOnInit(): void {
    this.getTeams();
  }

  public getTeams() : void{
    this.eventService.getEvents().subscribe(
      (response : Event[]) => {this.events = response;
        console.log(this.events);},
      (error : HttpErrorResponse) => {alert(error.message);});
  }
}

