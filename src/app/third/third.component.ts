import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  myProp:Boolean= true;
  myProp1:string ="15px";

  isActive:Boolean =false;
  multiClasses=
  {class1:true,
  class2:false,
  class3:true
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
