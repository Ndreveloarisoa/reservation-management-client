import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListHotelComponent} from "./hotel/list-hotel/list-hotel.component";
import {AddHotelComponent} from "./hotel/add-hotel/add-hotel.component";
import {RegisterComponent} from "./client/register/register.component";
import {ListReservationComponent} from "./reservation/list-reservation/list-reservation.component";
import {AddReservationComponent} from "./reservation/add-reservation/add-reservation.component";
import {MainComponent} from "./structure/main/main.component";
import {AccueilComponent} from "./accueil/accueil.component";

const routes: Routes = [
  {
    path : '',
    pathMatch : 'full',
    redirectTo : 'main'
  },
  {
    path : 'main',
    component : MainComponent,
    children : [
      {
        path : 'accueil',
        component : AccueilComponent
      },
      {
        path : 'list-hotel',
        component : ListHotelComponent
      },
      {
        path : 'add-hotel',
        component : AddHotelComponent
      },
      {
        path : 'edit-hotel/:id',
        component : AddHotelComponent
      },
      {
        path : 'register',
        component : RegisterComponent
      },
      {
        path : 'list-reservation',
        component : ListReservationComponent
      },
      {
        path : 'add-reservation',
        component : AddReservationComponent
      },
      {
        path : 'edit-reservation/:id',
        component : AddReservationComponent
      },
      {
        path : '**',
        redirectTo : 'accueil',
        pathMatch : 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
