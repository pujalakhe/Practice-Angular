import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { homedir } from 'os';
import { PrdouctComponent } from './components/prdouct/prdouct.component';
import { authGuard } from './guard/auth.guard';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  // {path:'about',component:AboutComponent},
  {path:'product',component:PrdouctComponent,canActivate:[authGuard]},//auth guard 
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
