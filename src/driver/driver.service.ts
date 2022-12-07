import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Driver} from "./driver";


@Injectable({
  providedIn : "root"
})
export class DriverService {
  private apiServerUrl = "http://localhost:8080";
  constructor(private http : HttpClient) {
  }
  public getDrivers() : Observable<Driver[]> {
    return this.http.get<Driver[]>(`${this.apiServerUrl}/drivers`);
  }
}
