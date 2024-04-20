import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cart } from '../Model/cart.model';
import { HttpClient } from '@angular/common/http';
import { AddService } from '../add.service';
import { DemandeService } from '../demande.service';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  constructor(private CartService:CartService,private Http:HttpClient,private AddService:AddService,private DemandeService:DemandeService,private httpClient: HttpClient,private fb : FormBuilder ,private ServiceloginService : LoginService,private router : Router){}
  cart:Array<cart>=[]
  objectImage:Array<any>=[]
  ia:any
  userName:any
  ngOnInit()
  {
    this.ServiceloginService.ia$.subscribe(ia => {
      this.ia = ia;
    });
    this.ServiceloginService.userName$.subscribe(userName => {
      this.userName = userName;
    });
    this.GetCart()
    this.getImage()
    this.sommeProduct()
  }
  sommeProduct():number
  {
    let somme=0
    for(let i=0;i<this.cart.length;i++)
    {
      somme=somme+(this.cart[i].prix*this.cart[i].quantite)
    }
    return somme
  }
  GetCart()
  {
      this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
  }
  getImage()
  {
    this.Http.get<any>("http://localhost:8081/image/GetImgProduit").subscribe({next:data=>{this.objectImage=data;}})
  }
  trouveImg(nom:any):string|string
  {
    let i=0
    let trouve=false
    while(trouve==false)
    {
      if(this.objectImage[i].nameProduct==nom)
      {
        trouve=true
        return 'data:image/jpeg;base64,'+this.objectImage[i].picbyte
      }
      else
      {
        i++
      }
    }
    return ""
  }
  DeleteCart(id:number)
  {
        this.cart=JSON.parse(localStorage.getItem('cart') || '[]');
        let i=0
        while(i<this.cart.length)
        {
          if(this.cart[i].id==id)
          {
            this.cart.splice(i,1)
            break
          }
          i++
        }
        localStorage.setItem('cart', JSON.stringify(this.cart))
        this.AddService.Disincriment()
  }
  AddDemande()
  {
    if(confirm("Confermez vous?"))
    {
      this.DemandeService.AddDemande(this.cart).subscribe({next:data=>{}})
    }
  }
}  
  
