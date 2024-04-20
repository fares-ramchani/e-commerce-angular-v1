import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceProductService } from '../service-product.service';
import { product } from '../Model/product.model';
import { HttpClient } from '@angular/common/http';
import { AddService } from '../add.service';
import { CartService } from '../cart.service';
import { cart } from '../Model/cart.model';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  public id: string | null = null;
  product!: product
  trouveimg: any
  objectImage: Array<any> = []
  nbrCmd: any = 0
  userName:any
  ia:any
  cart:Array<cart>=[]
  constructor(private route: ActivatedRoute, private ServiceProductService: ServiceProductService, private Http: HttpClient, private r: Router, private cdr: ChangeDetectorRef, private counterService: AddService, private CartService: CartService,private ServiceloginService:LoginService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    
    this.getProduct()
    this.getImage()
    localStorage.setItem('nbrCmd', this.nbrCmd.toString())
    this.ServiceloginService.userName$.subscribe(userName => {
      this.userName = userName;
    });
    this.ServiceloginService.ia$.subscribe(ia => {
      this.ia = ia;
    });

  }
  getProduct() {
    this.ServiceProductService.GetOneProduct(this.id).subscribe({ next: data => { this.product = data } })
  }
  getimg(nameProduct: any) {
    this.ServiceProductService.getOneImg(nameProduct).subscribe({
      next: data => {
        this.trouveimg = data
        return 'data:image/jpeg;base64,' + this.trouveimg.picbyte
      }
    })
  }
  trouveImg(nom: any): string | string {
    let i = 0
    let trouve = false
    while (trouve == false) {
      if (this.objectImage[i].nameProduct == nom) {
        trouve = true
        return 'data:image/jpeg;base64,' + this.objectImage[i].picbyte
      }
      else {
        i++
      }
    }
    return ""
  }
  getImage() {
    this.Http.get<any>("http://localhost:8081/image/GetImgProduit").subscribe({ next: data => { this.objectImage = data; } })
  }

  addCart(nameProduct: String, prix: number) {
    let newCartItem: cart = { id: 0, nameProduct: nameProduct, prix: prix, quantite: 1, client: this.userName };
      this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
      this.cart.push(newCartItem);
      localStorage.setItem('cart', JSON.stringify(this.cart));
      this.counterService.increment();
      alert("Produit ajouté au panier avec succès");
  }
  
  
}
