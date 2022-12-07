import { Component, OnInit } from '@angular/core';
import {Driver} from "./driver";
import {HttpErrorResponse} from "@angular/common/http";
import {DriverService} from "./driver.service";

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
  public drivers : Driver[] = [];

  constructor(private driverService : DriverService) {}
  ngOnInit(): void {
    this.getDrivers();
  }

  public getDrivers() : void{
    this.driverService.getDrivers().subscribe(
      (response : Driver[]) => {this.drivers = response;
        console.log(this.drivers);},
      (error : HttpErrorResponse) => {alert(error.message);});
  }


}
