import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/Model/product.model';
import { ServiceProductService } from 'src/app/service-product.service';

@Component({
  selector: 'app-listes-produits',
  templateUrl: './listes-produits.component.html',
  styleUrls: ['./listes-produits.component.css']
})
export class ListesProduitsComponent implements OnInit{
  products:Array<product>=[]
  page: number = 1
  count: number = 0
  cardSize: number = 5
  prix:number=0
  quantite:number=0
  selectedProductId: number | null = null;
  constructor(private ServiceProductService:ServiceProductService)
  {

  }
  ngOnInit() {
    this.GetProduct()
  }
  GetProduct()
  {
    this.ServiceProductService.GetProduct().subscribe({next:data=>{this.products=data}})
  }
  DeleteProduct(id:Number)
  {
    this.ServiceProductService.DeleteProduct(id).subscribe({next:data=>{this.GetProduct()}})
  }
  onCardDataChange(event: any) {
    this.page = event;
    this.GetProduct();
  }
  OpenModifierModal(id: number) {
    
    this.selectedProductId = id;
    
  }
  ModifierProduit() {
    
    if (this.selectedProductId !== null) {
      this.ServiceProductService.ModifierProduit(
        this.selectedProductId,
        this.prix,
        this.quantite
      ).subscribe({
        next: (data) => {
          this.GetProduct();
         
          this.selectedProductId = null;
          this.prix = 0;
          this.quantite = 0;
        },
      });
    }
  }

}