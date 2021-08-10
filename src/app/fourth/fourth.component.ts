import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {

 name:string="Lalit Rai";
 msg : string="";
 message : string ="";
  onClick(){
     console.log("Button is clicked");
     this.msg="You have clicked";
    // return "Hello " + this.name;
  }

  onClick1(event){
    console.log("Button is clicked");
    this.message= "You have selected " + event.target.value;
   // return "Hello " + this.name;
 }

  onInputClick(event)
  {
    console.log(event);
    console.log(event.target.value);


  }

  OnClick2(name)
  {
    this.message = "Hello " + name.value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
