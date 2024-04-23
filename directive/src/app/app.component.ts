import { HtmlParser } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'directive';
  subjects=[
    {
      name:'html',
      id:1
    },
    {
      name:'css',
      id:2
    },
  ];

  trackById(index:number, subjects:any){
     return subjects.name;
    }
    onAssign(){
      this.subjects =[
        {
          name:'html',
          id:1
        },
        {
          name:'css',
          id:2
        },
        {
          name:"js",
          id:3
        },
        {
          name:"angular",
          id:4
        }
      ];
    }

    countries=["Nepal","korea"];
    OnAddCountry(name:string){
      this.countries.push(name.toLocaleUpperCase());
      this.countries.sort();
    }
}
