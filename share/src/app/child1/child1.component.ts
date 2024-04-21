import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {
  @Output() submit = new EventEmitter<string>();
  submitted(value:string)
  {
    this.submit.emit(value);
  }
}
