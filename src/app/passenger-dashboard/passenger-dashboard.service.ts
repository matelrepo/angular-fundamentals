import {Passenger} from "./models/passengers.interface";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {map, Observable} from "rxjs";

const PASSENGER_API = ' http://localhost:3000/passengers'

@Injectable()
export class PassengerDashboardService {
  constructor(private http: HttpClient) {
  }

  getPassenger(): Observable<Passenger[]> {
    return this.http
      .get<Passenger[]>(PASSENGER_API);
  }

  updatePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http
      .put<Passenger>(`${PASSENGER_API}/${passenger.id}`, passenger);
  }

  removePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http
      .delete<Passenger>(`${PASSENGER_API}/${passenger.id}`);
  }
}
