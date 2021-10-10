import { Component, OnInit } from '@angular/core';
import {ReservationService} from "../reservation.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Reservation} from "../model/reservation";

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit {

  reservation : Reservation;
  reservationForm : FormGroup;
  id : number;
  isUpdateMode : boolean;
  clientName : string;
  hotelName : string;
  villeHotel: string;
  idClient: number =0;
  idHotel: number = 0;
  nbreEtoile : number = 0;

  constructor(private reservationService : ReservationService , private router : Router , private activatedRoute : ActivatedRoute , private fb : FormBuilder) {
    // this.activatedRoute.params.subscribe(param=>{
    //   this.id = +param['id'] || 0;
    // });

    let hotelToBook = JSON.parse(localStorage.getItem('hotelToBook'));
    let userData = JSON.parse(localStorage.getItem('userData'));
    if(hotelToBook && userData){
      this.clientName = userData['nom'];
      this.idClient = userData['id'];
      this.hotelName = hotelToBook['nom'];
      this.villeHotel = hotelToBook['ville'];
      this.idHotel = hotelToBook['id'];
      this.nbreEtoile = hotelToBook['nbreEtoiles'];
    }
  }

  ngOnInit(): void {
    this.createReservationForm();
  }


  createReservationForm(){
    this.reservationForm = this.fb.group({
      id : [0],
      idClient : [this.idClient],
      idHotel : [this.idHotel],
      nbreDeNuit : [0 , Validators.required],
      nbreDePersonne : [0, Validators.required],
      clientName : [this.clientName],
      hotelName :  [this.hotelName],
      villeHotel : [this.villeHotel],
      nbreEtoiles : [this.nbreEtoile],
      prix : [0],
      dateDeReservation : ['']
    });
  }

  reserver(){
    if(this.reservationForm.valid){
      this.reservation = this.reservationForm.getRawValue();
      this.reservationService.reserverHotel(this.reservation).subscribe(data=>{
        localStorage.removeItem('hotelToBook');
        this.router.navigateByUrl('main/list-reservation');
      })
    }
  }


}
