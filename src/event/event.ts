/*private String raceName;*/
/*private String country;*/
/*private LocalDate date;*/



export class Event {
  public raceName : string;
  public country : string;
  public date : Date;

  constructor(raceName : string, country : string, date : Date) {
    this.raceName = raceName;
    this.country = country;
    this.date = date;
  }

}
