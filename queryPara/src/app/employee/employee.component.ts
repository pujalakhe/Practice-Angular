import { Component,OnInit,inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  pageNum:any;
  color:any;
 
  ngOnInit():void{
    // this.pageNum = this.activatedRoute.snapshot.queryParamMap.get("page");
    this.activatedRoute.queryParamMap.subscribe(params=>
      {this.pageNum = params.get('page');
      });
    this.activatedRoute.queryParamMap.subscribe(params=>
        {this.color = params.get('color');
  
        });
  }

}
