import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import{CustomPipe} from './custom.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pipes';
  date =  Date();
  amount = 25;
  num :string="10";
  birthday = new Date (2003 ,5 ,18);
  toggle = true;
  get format(){
    return this.toggle ? "shortDate" : "fullDate";
  }
  toggleFormat()
  {
    this.toggle = !this.toggle;
  }
  word =12;
  subjects = [
    { course: "HTML", cost: 1800 }, 
    { course: "CSS", cost: 2900 }, 
    { course: "XML", cost: 1500 }, 
    { course: "Angular ", cost: 3700 }, 
    { course: "React ", cost: 2500 } 
  ]; 
  arrays=[19,51,88,23];

}
