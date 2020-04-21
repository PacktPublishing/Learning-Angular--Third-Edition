import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authReq = req.clone({ setHeaders: { Authorization: 'myAuthToken' } });
    return next.handle(authReq);
  }
}
