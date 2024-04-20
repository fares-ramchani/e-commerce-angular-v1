import { Component } from '@angular/core';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-side-barre',
  templateUrl: './side-barre.component.html',
  styleUrls: ['./side-barre.component.css']
})
export class SideBarreComponent {
  activeIndex: number=0;
  username :any=localStorage.getItem('username')
  current: string = window.location.href;
  allLinks = document.querySelectorAll(".sidebar-links a");
  collapsed=true;
  count: any;
  userName:any
  ia:any
        


  constructor(private ServiceloginService:LoginService) { }

  ngOnInit(): void {
    const expandBtn = document.querySelector(".expand-btn") as HTMLElement;
    expandBtn.addEventListener("click", () => {
      document.body.classList.toggle("collapsed");
      
    });
    

    this.allLinks.forEach((elem) => {
      elem.addEventListener('click', () => {
        const hrefLinkClick = elem.getAttribute("href");

        this.allLinks.forEach((link) => {
          if (link.getAttribute("href") === hrefLinkClick) {
            link.classList.add("active");
          } else {
            link.classList.remove('active');
          }
        });
      });
    });
    this.ServiceloginService.ia$.subscribe(ia => {
      this.ia = ia;
    });
    this.ServiceloginService.userName$.subscribe(userName => {
      this.userName = userName;
    });
  }
  togglecollase():void{
    this.collapsed = !this.collapsed;
  }
  closeSidenav():void{
    this.collapsed =false;
  
  }
  deconnexion()
  {
    this.ServiceloginService.logout()
    this.userName = "";
    this.ia = "false";
  }
}
