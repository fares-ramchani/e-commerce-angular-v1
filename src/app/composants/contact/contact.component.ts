import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formLogin!:FormGroup;
  message :any=localStorage.getItem('message')
  messagee: any;
  
  constructor (private httpClient: HttpClient,private fb : FormBuilder ,private ServiceloginService : LoginService,private router : Router){
    
  }
  ngOnInit(): void {
    this.formLogin=this.fb.group({
      username :this.fb.control('',Validators.required),
      password:this.fb.control('',Validators.required)
    })
    
  }
  selectedFile!: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;

  imageName1: any;
  login1(){
    let username=this.formLogin.value.username;
    let pwd=this.formLogin.value.password;
    this.ServiceloginService.login(username,pwd).subscribe({
      next : data=> {
        this.messagee=data['er1'];
        this.ServiceloginService.loadProfile(data)
        localStorage.setItem('username',this.ServiceloginService.username)
        localStorage.setItem('domaine',this.ServiceloginService.domaine)
        localStorage.setItem('role',this.ServiceloginService.role)
        localStorage.setItem('iss',this.ServiceloginService.isAuthenticated.toString())
        if (this.ServiceloginService.role=="CLIENT"){
          this.router.navigateByUrl("/")
        }else if((this.ServiceloginService.role=="ADMIN CLIENT")){
          this.router.navigateByUrl("/AdminHomeComponent")
        }
        }  
      })
      

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
