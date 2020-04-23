import { Component, OnInit } from '@angular/core';
import {BikeDataService} from '../bike-data.service'
import { Observable } from 'rxjs';
import {Bike} from '../bike.model';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent{
  private _fetchBikes$: Observable<Bike[]> = this._bikeDataService.bikes$;

  constructor(private _bikeDataService: BikeDataService) {}
  public bikeType: number;

  public applyFilter(filter: number) {
    this.bikeType = filter;
  }

  get bikes$():Observable<Bike[]>{
    return this._fetchBikes$;
  }
}
