import { Component,Inject} from '@angular/core';

@Component({
  selector: 'app-usevalue',
  templateUrl: './usevalue.component.html',
  styleUrl: './usevalue.component.css'
})
export class UsevalueComponent {
  constructor(
    @Inject('USE_FAKE') public useFake:string,
    @Inject('APP_CONFIG') public appConfig:any,
    @Inject('Func') public someFunc:any
  ){
    // console.log(someFunc());
    
  }
}
