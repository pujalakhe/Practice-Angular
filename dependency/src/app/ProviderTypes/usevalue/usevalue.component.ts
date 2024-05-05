import { Component,Inject} from '@angular/core';
import { APP_CONFIG_TOKEN } from '../../app.module';
@Component({
  selector: 'app-usevalue',
  templateUrl: './usevalue.component.html',
  styleUrl: './usevalue.component.css'
})
export class UsevalueComponent {
  constructor(
    @Inject('USE_FAKE') public useFake:string,
    @Inject(APP_CONFIG_TOKEN) public appConfig:any,
    @Inject('Func') public someFunc:any
  ){
    // console.log(someFunc());
    
  }
}
