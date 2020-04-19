import { Pipe, PipeTransform } from '@angular/core';
import { Bike } from './bike.model';

@Pipe({
  name: 'bikeFilter'
})
export class BikeFilterPipe implements PipeTransform {

  transform(bikes: Bike[], type): Bike[] {
    switch (type) {
      case 0:
        return bikes;
        break;
      case 1:
        return bikes.filter(bike => bike.bikeType == "Road Bike");
        break;
      case 2:
        return bikes.filter(bike => bike.bikeType == "Mountain Bike");
        break;
      case 3:
        return bikes.filter(bike => bike.bikeType == "E-Bike");
        break;
      case 4:
        return bikes.filter(bike => bike.bikeType == "Urban Bike");
        break;
      default:
        return bikes;
    }
  }
}
