import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  CanMatchFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { BuyComponent } from '../components/prdouct/buy/buy.component';
import { ProductListService } from '../services/product-list.service';
export const authGuard = () => {
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
  if (inject(AuthService).isAuthenticated()) {
    return true;
  } else {
    inject(Router).navigate(['/login']);
    return false;
  }
};
export const activeChildGuard = () => {
  return authGuard();
};
export const canDeactivate = (component: BuyComponent) => {
  return component.canExit();
};
export const resolveGuard = () => {
  const productService = inject(ProductListService);
  return productService.getAllProducts();
};
export const roleManagerGuard: CanMatchFn = (route, segments) => {
  const role = localStorage.getItem('role');
  console.log(role);
  if (role && role == 'admin') {
    return true;
  }
  return false;
};
