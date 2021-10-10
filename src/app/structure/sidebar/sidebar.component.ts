import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isAdmin : boolean;
  isClient : boolean;
  constructor() { }

  ngOnInit(): void {
    let userData = JSON.parse(localStorage.getItem('userData'));
    if(userData){
      this.isAdmin = userData['role']=='ADMIN';
      this.isClient = userData['role']=='CLIENT';
    }
  }

}
