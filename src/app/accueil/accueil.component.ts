import { Component, OnInit } from '@angular/core';
import {Hotel} from "../hotel/model/hotel";
import {HotelService} from "../hotel/hotel.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {


  hotels : Array<Hotel> = [];

  constructor(private hotelService : HotelService , private router : Router) { }

  ngOnInit(): void {
    this.getHotels();
  }


  getHotels(){
    this.hotelService.recuperTousLesHotels().subscribe(data=>{
      this.hotels = data;
    });
  }


  reserver(hotel : Hotel){
    let userData = localStorage.getItem('userData');
    if(userData){
      localStorage.removeItem('hotelToBook');
      localStorage.setItem('hotelToBook',JSON.stringify(hotel));
      this.router.navigateByUrl('main/add-reservation');
    }else{
      this.router.navigateByUrl('main/register');
    }

  }
}
