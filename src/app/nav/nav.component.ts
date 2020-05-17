import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../user/Authentication.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  currentUser$ = this._authenticationService.user$;
  currentRole$ = this._authenticationService.role$;

  constructor(private _authenticationService: AuthenticationService,private _router : Router) { }

  ngOnInit() {
  }

  login(){
    this._router.navigate(['login']);
  }

  logout(){
    this._authenticationService.logout();
  }
}
