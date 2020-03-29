import { Component, OnInit, Input } from '@angular/core';
import { Bike } from './bike.model';
import {Brand} from './brand'
import {Groupset} from './groupset'
import {Type} from './type'

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css']
})
export class BikeComponent{
  @Input() public bike : Bike;
  // myBrand = this.brand.brands[1]
  groupset : Groupset;
  type : Type;
  brand : Brand
  
  constructor() { }

  ngOnInit() {
  }

}
