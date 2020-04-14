import { Component, OnInit, Input } from '@angular/core';
import { Bike } from './bike.model';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css']
})
export class BikeComponent{
  @Input() public bike : Bike;
  
  constructor() { }

  ngOnInit() {
  }

}
