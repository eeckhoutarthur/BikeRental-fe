import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { Bike } from '../bike.model';


@Component({
  selector: 'app-add-bike',
  templateUrl: './add-bike.component.html',
  styleUrls: ['./add-bike.component.css']
})
export class AddBikeComponent /*implements OnInit*/ {
  @Output() public newBike = new EventEmitter<Bike>();
  public bikeFormGroup: FormGroup;
  public selectedB;
  public readonly brands = ["Specialized","Trek","Ridley"];

  constructor(fb: FormBuilder) { 
    this.bikeFormGroup = fb.group(
      {
        name: new FormControl(),
        bikeBrand: new FormControl()
      }
    )
  }

  // ngOnInit() {
  //   this.bikeFormGroup = new FormGroup({
  //     name: new FormControl(),
  //     // price: new FormControl(),
  //     // discBrakes: new FormControl(),
  //     bikeBrand: new FormControl(),
  //     // bikeGroupset: new FormControl(),
  //     // bikeType: new FormControl()
  //   }
  //   );
  // }

  onSubmit(){
    this.newBike.emit(new Bike(this.bikeFormGroup.value.name,this.bikeFormGroup.value.price, this.bikeFormGroup.value.discBrakes,this.bikeFormGroup.value.bikeBrand,this.bikeFormGroup.value.bikeGroupset,
      this.bikeFormGroup.value.bikeType));
  }

}
