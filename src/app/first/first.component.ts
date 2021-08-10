import { Component} from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
 name : string ="Lalit Rai";
 Status:boolean = false;
 status1 : string ="Online";
 status2 :  string = "Offline";
 GetName()
 {
   return "Hello" + this.name;
 }
}
