import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sixth',
  templateUrl: './sixth.component.html',
  styleUrls: ['./sixth.component.css']
})
export class SixthComponent implements OnInit {
 image1 : string ="/assets/images/mouse.jpg";
 image2 : string ="/assets/images/printer.jpg";
 image3 : string ="/assets/images/plotter.jpg";
 image4 : string ="/assets/images/plotter.jpg";
 image5 : string ="/assets/images/Monitor.jpg";
   Products =
   [
    { Name : "Mouse" , Price : 900 , Description : 'This is of gray color' , img : this.image1},
  
    { Name : "Printer" , Price : 1900 , Description : 'This is of gray color' ,img : this.image2},
    
    { Name : "Plotter" , Price : 2900 , Description : 'This is of gray color',img : this.image3},
    
    { Name : "Keyboard" , Price : 1900 , Description : 'This is of gray color' ,img : this.image4},
    
    { Name : "Monitor" , Price : 19000 , Description : 'This is of gray color', img : this.image5}, 
  ];

  viewMode:string="none";
  constructor() { }

  ngOnInit(): void {
  }

}
