import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  
   name : string ="Lalit Rai";
   todaydate = new Date();
   months = ["Jan", "Feb", "Mar", "April", "May", "Jun",
   "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
   jsonval = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}};
  constructor() { }

  ngOnInit(): void {
  }

}
