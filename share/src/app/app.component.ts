import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'share';
  presented=0;
  absented=0;
  onvoted(presented:boolean){
    if(presented)
    this.presented++;
    else{
      this.absented++;
    }
  }
  students:string[]=["puja","sumit","alish"];
  addItem(inputItem:string){
    this.students.push(inputItem);
  }

}
