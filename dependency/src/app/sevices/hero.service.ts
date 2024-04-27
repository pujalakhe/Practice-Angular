import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'//what to provide
})
export class HeroService {

  //how to provide depedency
  constructor() { }
  //Service logic here
  private data :any[]=[];
  getData(){
    return this.data;
  }
  addData(item:any)
  {
    this.data.push(item);
  }
}
