import { ActivatedRouteSnapshot, CanActivateFn,Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject, } from '@angular/core';
import { BuyComponent } from '../components/prdouct/buy/buy.component';
export const authGuard = 
  () => {
  // let authService = inject(AuthService);
  // let router = inject(Router);
  // let isLoggedIn = authService.isAuthenticated();
  // if(isLoggedIn){
  //   return true;
  // }
  // else{
  //   router.navigate(['/about']);
  // }
  // Both ways are  correct
  if(inject(AuthService).isAuthenticated()){
    return true;
  }
  else{
    inject(Router).navigate(['/login']);
    return false;
  }
};
export const activeChildGuard = ( ) => {
  return authGuard();
};
export const canDeactivate = (component:BuyComponent) => {
  return component.canExit();
};

