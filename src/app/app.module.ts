import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {DriverComponent} from "../driver/driver.component";
import {RouterModule, Routes} from "@angular/router";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TeamComponent} from "../team/team.component";
import {EventComponent} from "../event/event.component";
import {CircuitComponent} from "../circuit/circuit.component";
import {AddTeamComponent} from "../add-team/add-team.component";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {HomeComponent} from "../home/home.component";


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'team', component: TeamComponent},
  {path: 'driver', component: DriverComponent},
  {path: 'event', component: EventComponent},
  {path: 'circuit', component: CircuitComponent},
  {path: 'add-team', component: AddTeamComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    DriverComponent,
    TeamComponent,
    EventComponent,
    CircuitComponent,
    AddTeamComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
