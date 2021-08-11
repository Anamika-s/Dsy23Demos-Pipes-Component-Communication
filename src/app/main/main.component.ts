import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
 name: string ="Ajay Sood";
  constructor() { }
  
  CalledfromChild(msg : string)
  {
    console.log("Child has invoked it" + msg);
  }

  ngOnInit(): void {
  }

}
