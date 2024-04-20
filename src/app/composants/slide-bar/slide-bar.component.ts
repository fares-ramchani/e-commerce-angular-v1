import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { images } from 'src/app/Model/images.model';

@Component({
  selector: 'app-slide-bar',
  templateUrl: './slide-bar.component.html',
  styleUrls: ['./slide-bar.component.css']
})
export class SlideBarComponent implements OnInit{
  
  imageObject: Array<any> = [];
  constructor(private Http:HttpClient)
  {

  }
  ngOnInit(){
    this.getImage()
    
  }
  getImage()
  {
    this.Http.get<any>("http://localhost:8081/imagePromo/GetImgPromo").subscribe({next:data=>{this.imageObject=data;}})
  }

}
