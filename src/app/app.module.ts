import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
 import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
 
import { GenderPipe } from './gender.pipe';
import { MainComponent } from './main/main.component';
import { ChildComponent } from './child/child.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
   
    GenderPipe,
   
    MainComponent,
   
    ChildComponent
    
    
    
  ],
  imports: [
    BrowserModule 
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
