import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListHotelComponent } from './hotel/list-hotel/list-hotel.component';
import { AddHotelComponent } from './hotel/add-hotel/add-hotel.component';
import { ListReservationComponent } from './reservation/list-reservation/list-reservation.component';
import { AddReservationComponent } from './reservation/add-reservation/add-reservation.component';
import { RegisterComponent } from './client/register/register.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MainComponent } from './structure/main/main.component';
import { SidebarComponent } from './structure/sidebar/sidebar.component';
import { HeaderComponent } from './structure/header/header.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HotelCardComponent } from './accueil/hotel-card/hotel-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ListHotelComponent,
    AddHotelComponent,
    ListReservationComponent,
    AddReservationComponent,
    RegisterComponent,
    MainComponent,
    SidebarComponent,
    HeaderComponent,
    AccueilComponent,
    HotelCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
