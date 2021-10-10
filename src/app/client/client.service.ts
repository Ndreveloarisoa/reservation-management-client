import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Client} from "./model/client";
import {Observable} from "rxjs";
import {LoginRequest} from "./model/login-request";
import {LoginResponse} from "./model/login-response";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  url = 'http://localhost:8082/api/clients';
  constructor(private httpClient : HttpClient) { }

  ajouterClient(client : Client) : Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(this.url,client);
  }

  login(loginRequest : LoginRequest) : Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(this.url+'/login',loginRequest);
  }
}
