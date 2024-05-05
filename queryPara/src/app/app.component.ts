import { Component,inject } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'queryPara';
  route=inject(Router);
  navToPage(pageno:number){
    this.route.navigate(['/employee','2'],{queryParams:{page:pageno,color:'blue'}})
  }
}
