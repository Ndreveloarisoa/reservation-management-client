import { Component, OnInit } from '@angular/core';
import {HotelService} from "../hotel.service";
import {Hotel} from "../model/hotel";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-hotel',
  templateUrl: './list-hotel.component.html',
  styleUrls: ['./list-hotel.component.css']
})
export class ListHotelComponent implements OnInit {


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



  ajouterHotel(){
    this.router.navigate(['main/add-hotel'] );
  }

  modifierHotel(id : number){
    this.router.navigateByUrl('main/edit-hotel/'+id);
  }

  supprimerHotel(id: number){
    this.hotelService.supprimerHotel(id).subscribe(()=>{
      this.getHotels();
    })
  }

}
