import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormControl, ValidationErrors, AbstractControl, ValidatorFn } from '@angular/forms';
import { OrderDataService } from '../order-data.service';
import { Bike } from 'src/app/bike/bike.model';
import { Router, RouterState, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Order } from '../order.model';
import { AuthenticationService } from 'src/app/user/Authentication.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  public minDate = new Date();
  public endDateMin = new Date();
  public orderFormGroup : FormGroup;
  public bikeOrder: Bike;
  public succesMessage= '';
  private _currentUser$ = this._authenticationService.user$;

  constructor(private _orderDataService: OrderDataService,private  _authenticationService: AuthenticationService) { }

  ngOnInit(): void{
    this.orderFormGroup = new FormGroup(
      {
        startDate: new FormControl('',[Validators.required]),
        endDate: new FormControl('',[Validators.required]),
      }
    );
    this._orderDataService.currentBikeOrder.subscribe(value => this.bikeOrder = value);
  }

  getErrorMessage(errors: any){
    if(errors.required) return "Is required";
  }

  setMessage(){
    this.succesMessage = '';
  }

  onSubmit(){ 
    this._orderDataService.addOrder(new Order(this.orderFormGroup.get("startDate").value, this.orderFormGroup.get("endDate").value,this.bikeOrder, this._currentUser$.value));
    this.succesMessage = 'We have received your order!';
    this.orderFormGroup.reset();
    this.orderFormGroup.markAsUntouched();
  }

}
