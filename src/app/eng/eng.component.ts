import { Component, OnInit } from '@angular/core';
import { product } from '../Model/product.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceProductService } from '../service-product.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-eng',
  templateUrl: './eng.component.html',
  styleUrls: ['./eng.component.css']
})
export class EngComponent implements OnInit {
  SelectFile1!:File
  public productform!:FormGroup
  constructor(private ServiceProductService:ServiceProductService,private formBuilder:FormBuilder,private router:Router,private http:HttpClient)
  {
    
  }
  ngOnInit(){
    this.productform=this.formBuilder.group({
    nom:this.formBuilder.control(''),
    prix:this.formBuilder.control('') ,
    discription:this.formBuilder.control(''),
    quantite:this.formBuilder.control
  })
    
  }
  saveProduct()
  {
    let product:product=this.productform.value
    const uploadImageData=new FormData();
    this.ServiceProductService.AddProduct(product).subscribe({next:data=>{
      alert(this.SelectFile1.name)
      uploadImageData.append('imageFile',this.SelectFile1,this.SelectFile1.name)
      this.http.post("http://localhost:8081/image/AddImageProduit",uploadImageData,{observe:'response'}).subscribe((response)=>{
      if(response.status===200)
      {
        alert("images uploaded succesfully")
      }
      else
      {
        alert("upload filed")
      }
    })
    }})
  }
  public fileChange(event:any)
  {
    this.SelectFile1=event.target.files[0]
  }
  }
