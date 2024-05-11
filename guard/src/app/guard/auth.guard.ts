import { ActivatedRouteSnapshot, CanActivateFn,Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject,Injectable } from '@angular/core';
import { retry } from 'rxjs';

export const authGuard: CanActivateFn = 
  (route:ActivatedRouteSnapshot ,state:RouterStateSnapshot) => {
  // let authService = inject(AuthService);
  // let router = inject(Router);
  // let isLoggedIn = authService.isAuthenticated();
  // if(isLoggedIn){
  //   return true;
  // }
  // else{
  //   router.navigate(['/about']);
  // }
  //Both ways are  correct
  if(inject(AuthService).isAuthenticated()){
    return true;
  }
  else{
    inject(Router).navigate(['/about']);
  }
  return true;
};
