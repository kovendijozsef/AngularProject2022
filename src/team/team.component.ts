import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {Team} from "./team";
import {HttpErrorResponse} from "@angular/common/http";
import {TeamService} from "./team.service";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  public teams : Team[] = [];
  constructor(private teamService : TeamService) {}
  ngOnInit(): void {
    this.getTeams();
  }

  public getTeams() : void{
    this.teamService.getTeams().subscribe(
      (response : Team[]) => {this.teams = response;
        console.log(this.teams);},
      (error : HttpErrorResponse) => {alert(error.message);});
  }
}
