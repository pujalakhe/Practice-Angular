import { Component, OnInit,inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{
  orderType:any;
  color:any;
activatedRoute =inject(ActivatedRoute)
 
  ngOnInit(){
    this.activatedRoute.queryParamMap.subscribe(params => {
      this.orderType = params.get('order');
    });
    this.activatedRoute.queryParamMap.subscribe(params => {
      this.color = params.get('color');
    });
  }

}
