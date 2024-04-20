import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceClientService } from '../service-client.service';
import { Router } from '@angular/router';
import { Client } from '../Model/client.model';

@Component({
  selector: 'app-registration-client',
  templateUrl: './registration-client.component.html',
  styleUrls: ['./registration-client.component.css']
})
export class RegistrationClientComponent {
  public clientForm!:FormGroup;
  constructor(private httpClient: HttpClient,private formBuilder:FormBuilder,private ServiceRegestrerService:ServiceClientService,private router : Router){
    
  }
  ngOnInit() {
    this.clientForm=this.formBuilder.group({
      nom:this.formBuilder.control('',Validators.required),
      prenom:this.formBuilder.control('',Validators.required),
      adresse:this.formBuilder.control('',Validators.required),
      tel:this.formBuilder.control('',[Validators.required,Validators.max(99999999),Validators.min(10000000)]),
      mail:this.formBuilder.control('',Validators.email),
      mdp:this.formBuilder.control('',Validators.required), 
    })
    
  }
  saveClient(){
    let client:Client=this.clientForm.value
    let nom:String=client.nom
    this.ServiceRegestrerService.AddClient(client).subscribe({
      next : data=>{alert("Compte créé avec succès"); this.router.navigateByUrl("/LoginComponent")} 
          }
        )
      }
  getErrorsMessage(arg0: string,error: any):string {
    if(error['required']){
      return arg0+ " obligatoir";
    }else if(error['email']){
      return "email invalid"
    }
    else if(error['min']){
      return  "telephone invalid"
    }
    else if(error['max']){
      return  "telephone invalid"
    }
    else return "";
    
  
  }

}
