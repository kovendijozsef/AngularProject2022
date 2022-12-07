import {Team} from "../team/team";

export class Driver {
  public id : number;
  public name : string;
  public age : number;
  public points :  number;
  public dateOfBirth : Date;
  public racingNumber : string;
  public imagePath : string;
  public team : Team;

  constructor(id: number, name : string, age : number, points :  number, dateOfBirth : Date,  racingNumber : string, imagePath : string, team : Team) {

    this.id = id;
    this.age = age;
    this.name = name;
    this.points = points;
    this.dateOfBirth = dateOfBirth;
    this.racingNumber = racingNumber;
    this.imagePath = imagePath;
    this.team = team;
  }
}
