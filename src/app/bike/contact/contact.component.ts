import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  google:any;

  isInfoWindowSOpen = false;
  isInfoWindowLOpen = false;

  latitude = 39.533438;
  longitude = 2.723047;

  latCurrent:any;
  lngCurrent:any;

  constructor() {
    if (navigator)
    {
    navigator.geolocation.getCurrentPosition( pos => {
        this.lngCurrent = +pos.coords.longitude;
        this.latCurrent = +pos.coords.latitude;
      });
    }
  }

  openWindow(forStore){
    if(forStore){
      this.isInfoWindowSOpen = true;
      this.isInfoWindowLOpen = false;
    } 
    else {
    this.isInfoWindowLOpen = true;
    this.isInfoWindowSOpen = false;
    }
  }

  ngOnInit() {
  }

}
