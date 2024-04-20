import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formLogin!: FormGroup;
  message: any = localStorage.getItem('message')
  messagee: any;
  currentUrl: any;
  ia:any
  constructor(private httpClient: HttpClient, private fb: FormBuilder, private ServiceloginService: LoginService, private router: Router, private location: Location) {

  }
  ngOnInit() {
    this.formLogin = this.fb.group({
      username: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required)
      
    })
    const currentUrl = this.location.path();
    this.currentUrl = currentUrl;

  }

  login1() {
    let username = this.formLogin.value.username;
    let pwd = this.formLogin.value.password;
    this.ServiceloginService.login(username, pwd).subscribe({
      next: data => {
        this.ServiceloginService.loadProfile(data)
        localStorage.setItem('username', this.ServiceloginService.username)
        this.ServiceloginService.updateIa('true');
        this.ServiceloginService.updateUserName(this.ServiceloginService.username)
        if(this.currentUrl=='/LoginComponent')
        {
          if (this.ServiceloginService.role == "CLIENT") {
            this.router.navigateByUrl("/")
          } else if ((this.ServiceloginService.role == "ADMIN CLIENT")) {
            this.router.navigateByUrl("/AdminHomeComponent")
          }
        }
        else
        {
          localStorage.setItem('ia','true')
          this.router.navigateByUrl("/cart")
        }
      }
    })


  }
  getErrorsMessage(arg0: string, error: any): string {
    if (error['required']) {
      return arg0 + " obligatoir";
    } else if (error['email']) {
      return "email invalid"
    }
    else if (error['min']) {
      return "telephone invalid"
    }
    else if (error['max']) {
      return "telephone invalid"
    }
    else return "";
  }
  toRegistration()
  {
    this.router.navigateByUrl("/RegistrationClientComponent")
  }
}
