import { Component } from '@angular/core';

@Component({
  selector: 'app-templatereference',
  templateUrl: './templatereference.component.html',
  styleUrl: './templatereference.component.css'
})
export class TemplatereferenceComponent {
  displayText:boolean=true;
  greetMe(){
    this.displayText = !this.displayText;
  }
}
