import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  nomClientConnecte : string;
  constructor(private router : Router) { }

  ngOnInit(): void {
    let userData = JSON.parse(localStorage.getItem('userData'));
    if(userData){
      this.nomClientConnecte= userData['nom'];
    }
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('main/accueil');
    setTimeout(()=>{
      location.reload();
    },200);
  }

}
