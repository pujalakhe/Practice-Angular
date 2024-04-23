import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {
  isSpecial=false;
  changeClr(){
    this.isSpecial=!this.isSpecial;
  } 
  typedText='hello';
}
