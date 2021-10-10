import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Reservation} from "./model/reservation";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

   url = 'http://localhost:8082/api/reservations';
  constructor(private httpClient : HttpClient) {
  }

  reserverHotel(reservation : Reservation) : Observable<Reservation> {
    return this.httpClient.post<Reservation>(this.url,reservation);
  }

  detailDeReservation(idReservation : number) : Observable<Reservation> {
    return this.httpClient.get<Reservation>(this.url+'/'+idReservation);
  }

  recupererLesReservationsDunClient(clientId : number) : Observable<Reservation []> {
    return this.httpClient.get<Reservation []>(this.url+'/client/'+clientId);
  }

  recupererToutesLesReservations() : Observable<Reservation []> {
    return this.httpClient.get<Reservation []>(this.url);
  }

  supprimerReservation(idReservation : number) : Observable<any>{
    return this.httpClient.delete(this.url+'/'+idReservation);
  }

}
