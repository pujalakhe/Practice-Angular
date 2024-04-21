import { Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component {
  didvote=false;
  @Output() vote = new EventEmitter<boolean>();
  voted(value:boolean)
  {
    this.vote.emit(value);
    this.didvote=true;
  }
  @Input() name:string='';
}
