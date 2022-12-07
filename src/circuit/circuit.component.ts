import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {Circuit} from "./circuit";
import {HttpErrorResponse} from "@angular/common/http";
import {CircuitService} from "./circuit.service";
import {Driver} from "../driver/driver";

@Component({
  selector: 'app-team',
  templateUrl: './circuit.component.html',
  styleUrls: ['./circuit.component.css']
})
export class CircuitComponent implements OnInit {
  public circuits : Circuit[] = [];
  constructor(private circuitService : CircuitService) {}
  ngOnInit(): void {
    this.getCircuits();
  }

  public getCircuits() : void{
    this.circuitService.getCircuit().subscribe(
      (response : Circuit[]) => {this.circuits = response;
        console.log(this.circuits);},
      (error : HttpErrorResponse) => {alert(error.message);});
  }

}
