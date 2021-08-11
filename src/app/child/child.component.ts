import { Component, OnInit , Input , Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() 
  data;   // Input is a property decorator
   // It tells about the data that we have recd from parent comp
 @Output() 
 OnClick = new EventEmitter();
 @Output() 
 OnClick2 = new EventEmitter();
 onClick2()
 {
    console.log("This method is called");
    this.OnClick2.emit("Hello");
 }
  constructor() { }

  ngOnInit(): void {
  }

}
