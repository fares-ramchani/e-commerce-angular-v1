import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cart } from './Model/cart.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private Http:HttpClient) { }
  public addCart(cart:cart)
  {
    return this.Http.post<cart>("http://localhost:8081/Cart/AddCart",cart)
  }
  public GetCart(client:String):Observable<Array<cart>>
  {
    return this.Http.get<Array<cart>>("http://localhost:8081/Cart/GetCart?client="+client)
  }
  public DeleteCart(id:number)
  {
    return this.Http.delete<any>("http://localhost:8081/Cart/DeleteCart?id="+id)
  }
}