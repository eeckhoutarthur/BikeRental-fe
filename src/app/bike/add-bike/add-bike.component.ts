import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Bike } from '../bike.model';
import { BikeDataService } from '../bike-data.service';


@Component({
  selector: 'app-add-bike',
  templateUrl: './add-bike.component.html',
  styleUrls: ['./add-bike.component.css']
})
export class AddBikeComponent implements OnInit {
  public bikeFormGroup: FormGroup;
  // public selectedB;
  public readonly brands = ["Specialized","Trek","Ridley"];
  public selectedItembrand;

  constructor(private _bikeDataService : BikeDataService) {}
  ngOnInit(): void {
    this.bikeFormGroup= new FormGroup({
      name: new FormControl(''),
      bikeBrand: new FormControl(''),
      type: new FormControl(''),
      groupset: new FormControl(''),
      discBrakes: new FormControl(''),
      price: new FormControl('')
    })
  }

  onSubmit(){
    this._bikeDataService.addBike(new Bike(this.bikeFormGroup.get("name").value,this.bikeFormGroup.get("bikeBrand").value,this.bikeFormGroup.get("groupset").value,this.bikeFormGroup.get("type").value,
    this.bikeFormGroup.get("discBrakes").value == "true",this.bikeFormGroup.get("price").value)); 
  }
}
