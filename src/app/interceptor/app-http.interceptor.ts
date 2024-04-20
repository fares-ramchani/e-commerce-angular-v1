import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor(private serviceLogin: LoginService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!request.url.includes("/auth/login")
     && !request.url.includes("/imagePromo/GetImgPromo")
     && !request.url.includes("/Cart/AddCart") &&
     !request.url.includes("/Cart/GetCart") &&
     !request.url.includes("/Cart/DeleteCart") &&
    !request.url.includes("/image/GetImgProduit") &&
     !request.url.includes("/products/GetAllProducts")&&
     !request.url.includes("/products/GetProduct") &&
     !request.url.includes("/Client/AddClient")
    ) {
      let newRequest = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + this.serviceLogin.accessToken)
      })
      return next.handle(newRequest);
    } else
      return next.handle(request);

  }
}
