import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
// @ts-ignore
import {Team} from "./team";


@Injectable({
  providedIn : "root"
})
export class TeamService {
  private apiServerUrl = "http://localhost:8080";
  constructor(private http : HttpClient) {
  }
  public getTeams() : Observable<Team[]> {
    return this.http.get<Team[]>(`${this.apiServerUrl}/teams?sort=name,asc`,);
  }

  public addTeam(team : Team) : Observable<Team> {
    console.log(team);
    return this.http.post<Team>(`${this.apiServerUrl}/teams`, team);
  }
}
