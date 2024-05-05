import { Component, inject } from '@angular/core';
import { NavigationExtras,ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  router:Router=inject(Router)
  activeRoute:ActivatedRoute=inject(ActivatedRoute)
  navigateMethod(){
    this.router.navigate(['course'],{queryParams:{name:'puja',age:22},fragment: 'buttonClick'});
  }
  navigateRelative(){
    this.router.navigate(['course'],{relativeTo:this.activeRoute})
  }
  navigateByUrlMethod(){
    this.router.navigateByUrl('search?pageNum=3');
  }
}
