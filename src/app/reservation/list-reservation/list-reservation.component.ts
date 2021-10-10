import { Component, OnInit } from '@angular/core';
import {ReservationService} from "../reservation.service";
import {Reservation} from "../model/reservation";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-list-reservation',
  templateUrl: './list-reservation.component.html',
  styleUrls: ['./list-reservation.component.css']
})
export class ListReservationComponent implements OnInit {


  reservations : Array<Reservation> = [];
  isAdmin : boolean;
  isClient : boolean;

  constructor(private reservationService : ReservationService , private router : Router ,) { }

  ngOnInit(): void {
    let userData = JSON.parse(localStorage.getItem('userData'));
    this.getReservationAccordingCases(userData);

  }

  getReservationAccordingCases(userData:any){
    if(userData){
      this.isAdmin = userData['role']=='ADMIN';
      this.isClient = userData['role']=='CLIENT';
      if(this.isAdmin){
        this.getReservations()
      }
      if(this.isClient){
        this.getClientReservations(userData['id']);
      }
    }
  }

  getReservations(){
    this.reservationService.recupererToutesLesReservations().subscribe(data=>{
      this.reservations = data;
    });
  }

  getClientReservations(clientId :number){
    this.reservationService.recupererLesReservationsDunClient(clientId).subscribe(data=>{
      this.reservations = data;
    })
  }



  supprimerReservation(id: number){
    this.reservationService.supprimerReservation(id).subscribe(()=>{
      let userData = JSON.parse(localStorage.getItem('userData'));
      this.getReservationAccordingCases(userData);
    })

  }


}
