import {Driver} from "../driver/driver";

export class Circuit {
  public id: number;
  public name: string;
  public country: string;
  public length: string;
  public lapRecordHolder: Driver;
  public lapRecord: string;
  public imagePath: string;

  constructor(id: number, name: string, country: string, length: string, lapRecordHolder: Driver, lapRecord: string, imagePath: string) {
    this.id = id;
    this.name = name;
    this.country = country;
    this.length = length;
    this.lapRecordHolder = lapRecordHolder;
    this.lapRecord = lapRecord;
    this.imagePath = imagePath;
  }
}
