import { Injectable } from '@angular/core';
import {bikeData} from './mock-bikeData'
import{Bike} from './bike.model'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BikeDataService {
  // private _bikes = bikeData;

constructor(private http: HttpClient) { }

get bikes$(): Observable<Bike[]>{
  return this.http.get(`api/Bikes`).pipe(
    tap(console.log),
    map(
      (list: any[]): Bike[] => list.map(Bike.fromJSON)              
    )
  );
}

// get bikes(): Bike[]{
//   return this._bikes;
// }

// addBike(bike: Bike){
//   this._bikes.push(bike);
// }

}
