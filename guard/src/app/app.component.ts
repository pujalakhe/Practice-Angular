import { Component,OnInit,inject } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'guard';
  constructor(private authService :AuthService){}
  isLoggedIn = this.authService.isAuthenticated();
  productClicked(){
    if(this.isLoggedIn=== false)
    alert(`product clicked but as isLoggedIn value is ${this.isLoggedIn} ,the user is not directed to product page`);
    else{
      alert(`product clicked but as isLoggedIn value is ${this.isLoggedIn} ,the user is  directed to product page`);
    }
  }
 
  
}
