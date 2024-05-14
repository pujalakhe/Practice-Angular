import { Component,inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username!:string;
  userpassword!:string;
  isLogInClicked:boolean=false;
  router:Router=inject(Router);
  userLoggedIn:AuthService=inject(AuthService)
  onLoggedIn(username:string,userpassword:string)
  {
    if(username=="admin" && userpassword=='1')
      {
        alert(` ${username} logged in`);
        this.userLoggedIn.isLoggedIn=true;
        return this.router.navigate(['/product']);
      }
      else{
        alert('inavlid credentials');
        return false;
      }
  }
  //canDeactive


}
