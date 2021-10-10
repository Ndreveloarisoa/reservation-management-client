import { Component, OnInit } from '@angular/core';
import {HotelService} from "../hotel.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Hotel} from "../model/hotel";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {


  hotel : Hotel;
  hotelForm : FormGroup;
  id : number;
  isUpdateMode : boolean;
  errorMessage : string;
  constructor(private hotelService : HotelService , private router : Router , private activatedRoute : ActivatedRoute , private fb : FormBuilder) {
    this.activatedRoute.params.subscribe(param=>{
      this.id = +param['id'] || 0;
    });

  }

  ngOnInit(): void {
    this.isUpdateMode = this.id>0;
    this.createHotelForm();
    if(this.isUpdateMode){
      this.getHotelToUpdate();
    }
  }


  createHotelForm(){
    this.hotelForm = this.fb.group({
      id : [0],
      nom : ['',Validators.required],
      ville : ['',Validators.required],
      nbreEtoiles : [0,Validators.required],
      prixParNuit : [0,Validators.required]
    });
  }


  saveHotel(){
    if(this.hotelForm.valid){
      this.hotel = this.hotelForm.getRawValue();
      if(this.isUpdateMode){
        this.hotelService.modifierHotel(this.hotel).subscribe(()=>{
          this.router.navigateByUrl('main/list-hotel');
        });
      }else{
        this.hotelService.ajouterHotel(this.hotel).subscribe(()=>{
          this.router.navigateByUrl('main/list-hotel');
        });
      }
    }else{
      this.errorMessage = "Veuillez remplir tous les champs.";
    }
  }

  getHotelToUpdate(){
    this.hotelService.recuperHotel(this.id).subscribe(data=>{
      this.hotelForm.patchValue(data);
    })
  }

}
