import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {
  isActive=true;
  onActive()
  {
    this.isActive=!this.isActive;
  }

  games=["football","volleyball","basketball","tenis","cricket"]
  items=[
    {
      name:"raju",
      age:28
    },
    {
      name:"raju",
      age:28
    },
    {
      name:"raju",
      age:28
    },
  ]
  num:number = 0;
}
