import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../Authentication.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginFormGroup: FormGroup;
  public erroMessage: string= "";
  constructor(private autSetvice:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
    this.loginFormGroup= new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  onSubmit(){
    this.autSetvice.login(this.loginFormGroup.value.username,this.loginFormGroup.value.password).subscribe(
      (value) =>{
        if(value) this.router.navigate(["/bike/list"]);//-> Als de value true is dan zullen de fietsen getoond worden. Dit is een boolean vanwegie de login medthode uit Authentication.Service
        else this.erroMessage = "It was nos possible to login"
      },
      (error: HttpErrorResponse)=> {
        console.error(error);
        if(error.error instanceof Error) this.erroMessage = `Error occurred while trying to login the user ${this.loginFormGroup.value.username}`;
        else this.erroMessage = `${error.status} while trying to login the user ${this.loginFormGroup.value.username}`;
      }
    );
  }

}