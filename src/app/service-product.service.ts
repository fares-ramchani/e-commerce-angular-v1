import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from './Model/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceProductService {

  constructor(private http:HttpClient) {
    
   }
   public AddProduct(product:product)
   {
    return this.http.post<product>("http://localhost:8081/products/ajouterUnProduit",product)
   }
   public GetProduct():Observable<Array<product>>
   {
    return this.http.get<Array<product>>("http://localhost:8081/products/GetAllProducts")
   }
   public DeleteProduct(id:Number)
   {
    return this.http.delete<any>("http://localhost:8081/products/DeleteProduct?id="+id)
   }
   public GetOneProduct(id:any)
   {
    return this.http.get<any>("http://localhost:8081/products/GetProduct?id="+id)
   }
   public getOneImg(nameProduct:any)
   {
    return this.http.get<any>("http://localhost:8081/image/GetimgProduct",nameProduct)
   }
   public ModifierProduit(id: Number, prix: Number,quantite:number) {
    return this.http.put<any>(`http://localhost:8081/products/ModifierProduit?id=${id}&prix=${prix}&quantite=${quantite}`, {});
  }  
}
