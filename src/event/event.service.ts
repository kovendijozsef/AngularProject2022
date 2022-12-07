import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Event} from "./event";


@Injectable({
  providedIn : "root"
})
export class EventService {
  private apiServerUrl = "http://localhost:8080";
  constructor(private http : HttpClient) {
  }
  public getEvents() : Observable<Event[]> {
    return this.http.get<Event[]>(`${this.apiServerUrl}/events?sort=date`,);
  }

}
