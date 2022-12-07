import { Component, OnInit } from '@angular/core';
import {Driver} from "../driver/driver";
import {DriverService} from "../driver/driver.service";
import {HttpErrorResponse} from "@angular/common/http";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Team} from "../team/team";
import {TeamService} from "../team/team.service";

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  drivers : Driver[] = [];
  public teamlessDrivers : Driver[] = [];

  createTeamForm : FormGroup;

  constructor(
    private driverService : DriverService,
    private formBuilder : FormBuilder,
    private teamService : TeamService
  ) {
    this.createTeamForm = this.formBuilder.group({
      name: formBuilder.control('', [Validators.required]),
      nationality: formBuilder.control('', [Validators.required]),
      logo: formBuilder.control('', [Validators.required]),
      driver1: formBuilder.control('noDriver', [Validators.required]),
      driver2: formBuilder.control('noDriver', [Validators.required])
    });
  }
  ngOnInit(): void {
    this.getDrivers();
  }

  public getDrivers() : void{
    this.driverService.getDrivers().subscribe(
      (response : Driver[]) => {
        this.drivers = response;

        for (let driver of this.drivers) {
          if (driver.team === null) {
            this.teamlessDrivers.push(driver);
          }
        }
      },
      (error : HttpErrorResponse) => {alert(error.message);});
  }

  public addTeam() {
    // console.log(this.createTeamForm.value);
    var {name: teamName, nationality: teamNationality, logo: teamLogo, driver1, driver2} = this.createTeamForm.value;

    console.log(driver2);

    var drivers : Driver[] = [];

    if (driver1 !== "noDriver"){
      drivers.push(driver1);
    }
    if (driver2 !== "noDriver"){
      drivers.push(driver2);
    }

    var team = new Team(
      undefined,
      teamName,
      teamNationality,
      teamLogo,
      drivers,
      0
    );


    this.teamService.addTeam(team).subscribe((response : Team) => {
      console.log(response);
      alert("Team added successfully.");
    });
  }

  public control(name: string) {
    return this.createTeamForm.get(name);
  }

}
