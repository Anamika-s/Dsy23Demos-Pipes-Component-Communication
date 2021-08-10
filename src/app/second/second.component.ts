import { Component} from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent  {

 name: string ="Lalit Rai";
 enable:boolean =false;
 Status:boolean = false;
 status1 : string ="Online";
 status2 :  string = "Offline";
}
