import { Component, OnInit, Input } from '@angular/core';
import { Bike } from './bike.model';
import { OrderDataService } from '../order/order-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css']
})
export class BikeComponent{
  @Input() public bike : Bike;
  @Input() public imageNameForBike:string;
  
  constructor(private data: OrderDataService, private router: Router) { }

  ngOnInit() {}

  newBikeOrder(bikeOrder: Bike){
    this.data.changeBikeForOrder(bikeOrder);
    this.router.navigateByUrl('/order/add');
  }
}
