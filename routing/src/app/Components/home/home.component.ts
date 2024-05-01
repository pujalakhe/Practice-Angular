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
  navigateToCourse(){
    // this.router.navigate(['course']);
     this.router.navigate(['course'], {relativeTo:this.activeRoute});
    this.router.navigateByUrl('course')
  }
}
