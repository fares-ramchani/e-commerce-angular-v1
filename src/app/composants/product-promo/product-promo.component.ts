import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-promo',
  templateUrl: './product-promo.component.html',
  styleUrls: ['./product-promo.component.css']
})
export class ProductPromoComponent {
  SelectFile1!:File
  public ProductPromoForm!:FormGroup
  constructor(private formBuilder:FormBuilder,private router:Router,private http:HttpClient)
  {
    
  }
  ngOnInit(){
    this.ProductPromoForm=this.formBuilder.group({nom:this.formBuilder.control(''),prix:this.formBuilder.control(''),discription:this.formBuilder.control('')})
    
  }
  saveProduct()
  {
    const uploadImageData=new FormData();
    uploadImageData.append('imageFile',this.SelectFile1,this.SelectFile1.name)
    this.http.post("http://localhost:8081/imagePromo/AddImagePromo",uploadImageData,{observe:'response'}).subscribe((response)=>{
      if(response.status===200)
      {
        alert("images uploaded succesfully")
      }
      else
      {
        alert("upload filed")
      }
    })
  }
  public fileChange(event:any)
  {
    this.SelectFile1=event.target.files[0]
  }
}
