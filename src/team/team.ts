import {Driver} from "../driver/driver";

export class Team {
  public id : undefined;
  public name : string | null;
  public nationality : string | null;
  public drivers : Driver[];
  public points :  number;
  public imagePath : string | null;


  constructor(id: undefined, name: string | null, nationality: string | null, imagePath: string | null, drivers: Driver[], points: number) {

    this.id = id;
    this.name = name;
    this.nationality = nationality;
    this.drivers = drivers;
    this.points = points;
    this.imagePath = imagePath;
  }
}
