import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
// @ts-ignore
import {Circuit} from "./circuit";


@Injectable({
  providedIn : "root"
})
export class CircuitService {
  private apiServerUrl = "http://localhost:8080";
  constructor(private http : HttpClient) {
  }
  public getCircuit() : Observable<Circuit[]> {
    return this.http.get<Circuit[]>(`${this.apiServerUrl}/circuits`,);
  }

}
