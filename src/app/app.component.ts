import { Component } from '@angular/core';
import {ReservationService} from "./reservation/reservation.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reservation-management-client';


  constructor(){

  }
}
