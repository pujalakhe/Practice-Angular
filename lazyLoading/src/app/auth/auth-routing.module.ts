import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
// import { LoginComponent } from './components/login/login.component';
const routes: Routes = [{ path: '', component: AuthComponent },
  {path: 'login', 
  // component: LoginComponent}
  loadComponent:()=>import('./components/login/login.component').then(c=>c.LoginComponent)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
