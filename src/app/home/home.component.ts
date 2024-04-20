import { Component, OnInit } from '@angular/core';
import { product } from '../Model/product.model';
import { images } from '../Model/images.model';
import { HttpClient } from '@angular/common/http';
import { ServiceProductService } from '../service-product.service';
import { AddService } from '../add.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  searchtext:String=""
constructor(private Http:HttpClient,private ServiceProductService:ServiceProductService)
{

}
ngOnInit()
{
  this.getImage();
  this.GetProduct();
}
page:number=1
count:number=0
cardSize:number=9
status: any;
objectProduct:Array<product>=[]
objectImage:Array<any>=[]
getImage()
  {
    this.Http.get<any>("http://localhost:8081/image/GetImgProduit").subscribe({next:data=>{this.objectImage=data;}})
  }
  GetProduct()
  {
    this.ServiceProductService.GetProduct().subscribe({next:data=>{this.objectProduct=data}})
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
  onCardDataChange(event:any)
  {
    this.page=event;
    this.GetProduct();
    this.getImage();
  }
  
}
