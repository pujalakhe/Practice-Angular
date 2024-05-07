import { CanActivateFn,Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject,Injectable } from '@angular/core';
import { retry } from 'rxjs';

export const authGuard: CanActivateFn = (route ,state) => {
  let authService = inject(AuthService);
  let router = inject(Router);
  let isLoggedIn = authService.isAuthenticated();
  if(isLoggedIn){
    return true;
  }
  else{
    router.navigate(['/about']);
  }
  return true;
};
