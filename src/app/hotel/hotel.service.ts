import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Hotel} from "./model/hotel";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  url = 'http://localhost:8082/api/hotels';
  constructor(private httpClient : HttpClient) { }


  ajouterHotel(hotel : Hotel) : Observable<Hotel> {
    return this.httpClient.post<Hotel>(this.url,hotel);
  }

  recuperTousLesHotels() : Observable<Hotel []> {
    return this.httpClient.get<Hotel []>(this.url);
  }

  recuperHotel(idHotel : number) : Observable<Hotel> {
    return this.httpClient.get<Hotel>(this.url+'/'+idHotel);
  }


  modifierHotel(hotel : Hotel) : Observable<Hotel> {
    return this.httpClient.put<Hotel>(this.url,hotel);
  }

  supprimerHotel(idHotel : number) : Observable<any> {
    return this.httpClient.delete(this.url+'/'+idHotel);
  }



}
