import { Component, OnInit } from '@angular/core';
import {bikeData} from '../mock-bikeData'

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnInit {
  private _bikes = bikeData;
  constructor(

  ) { }

  get bikes(){
    return this._bikes;
  }

  ngOnInit() {
  }

}
