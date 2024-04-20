import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddService } from 'src/app/add.service';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  count: any;
  userName:any
  ia:any
  
  constructor(private counterService: AddService,private Login:LoginService,private router:Router,private ServiceloginService : LoginService) { }

  ngOnInit() { 
    this.ServiceloginService.ia$.subscribe(ia => {
      this.ia = ia;
    });
    this.ServiceloginService.userName$.subscribe(userName => {
      this.userName = userName;
    });
      this.counterService.count$.subscribe((count) => {
        this.count = count;
      });
  }
  deconnexion()
  {
    this.Login.logout()
    this.userName = "";
    this.ia = "false";
  }
  connexion()
  {
    this.router.navigateByUrl("/LoginComponent")
  }
}
