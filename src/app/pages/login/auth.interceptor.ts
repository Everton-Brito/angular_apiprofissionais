import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {


  constructor( ) { }

  intercept(request: any, next: { handle: (arg0: any) => any; }){
    var token = localStorage.getItem('jwt')

    var authRequest = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`)
    })
    return next.handle(authRequest)
  }
}
