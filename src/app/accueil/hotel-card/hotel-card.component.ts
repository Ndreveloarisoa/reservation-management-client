import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Hotel} from "../../hotel/model/hotel";

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.css']
})
export class HotelCardComponent implements OnInit {

  @Input()
  hotel : Hotel = new Hotel();

  @Output()
  reserverHotelEvent : EventEmitter<Hotel> = new EventEmitter<Hotel>();
  constructor() { }

  ngOnInit(): void {
  }

  reservationEvent(hotel : Hotel){
    this.reserverHotelEvent.emit(hotel);
  }

}
