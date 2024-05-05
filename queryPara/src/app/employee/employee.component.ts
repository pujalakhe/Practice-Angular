import { Component,OnInit,inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  userId:any;
  pageNum:any;
  color:any;
  // Accessing Router Parameter
  ngOnInit():void{
    // //snapshot
    // this.userId=this.activatedRoute.snapshot.paramMap.get('id');
    //observable
    this.activatedRoute.paramMap.subscribe(params=>{
      this.userId=params.get('id');
    })
    //Qvery Parameters
    //Snapshot Query Parameters
    // this.pageNum = this.activatedRoute.snapshot.queryParamMap.get("page");
    this.activatedRoute.queryParamMap.subscribe(params=>
      {this.pageNum = params.get('page');
      });
    this.activatedRoute.queryParamMap.subscribe(params=>
        {this.color = params.get('color');
  
        });
  }
}
