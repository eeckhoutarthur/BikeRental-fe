import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../user/Authentication.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private _authenticationService : AuthenticationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this._authenticationService.tokenStorage.length){
      const copiedRequest = request.clone({
        headers: request.headers.set("Authorization",`Bearer ${this._authenticationService.tokenStorage}`)
      });
      return next.handle(copiedRequest);
    }
    return next.handle(request);
  }
}
