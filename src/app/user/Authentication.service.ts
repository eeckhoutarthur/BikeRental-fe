import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

constructor() { }

login(email:string,password:string) : Observable<boolean>{
  return null;
  }

register(firstname:string,lastname:string,email:string,password:string) :  Observable<boolean>{
  return null;
  }

logout(){

  }

checkAvailabilityUserName = () => null;
}
