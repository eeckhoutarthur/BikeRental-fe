import { Component, OnInit } from '@angular/core';
import {BikeDataService} from '../bike-data.service'
import { Observable, EMPTY } from 'rxjs';
import {Bike} from '../bike.model';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnInit{
  private _fetchBikes$: Observable<Bike[]>;
  public errorMessage: string = '';

  constructor(private _bikeDataService: BikeDataService) {}

  ngOnInit(): void {
    this._fetchBikes$ = this._bikeDataService.allBikes$.pipe(
      catchError(error => {
        this.errorMessage = error;
        return EMPTY
      })
    );
  }
  public bikeType: number;

  public applyFilter(filter: number) {
    this.bikeType = filter;
  }

  get bikes$():Observable<Bike[]>{
    return this._fetchBikes$;
  }
}
