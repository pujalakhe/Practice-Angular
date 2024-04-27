import { Component } from '@angular/core';
import { HeroService } from './sevices/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers :[HeroService]
})
export class AppComponent {
  title = 'dependency';
  items !:any [];
  constructor(private mySevice :HeroService)
  {
    this.items =this.mySevice.getData();
  }
  addItem(){
    const newItem = { id: Date.now(), value: 'New Item' };
    this.mySevice.addData (newItem);
    this.items = this.mySevice.getData();
  }
}
