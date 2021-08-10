import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {

 name:string="Lalit Rai";
 msg : string="";
  onClick(){
     console.log("Button is clicked");
     this.msg="You have clicked";
    // return "Hello " + this.name;
  }

  onInputClick(event)
  {
    console.log(event);
    console.log(event.target.value);


  }
  message : string =""; 
  onClick1(event)
  {
    this.message ="You have seleted " + event.target.value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
