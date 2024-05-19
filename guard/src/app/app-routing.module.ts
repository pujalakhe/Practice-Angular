import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PrdouctComponent } from './components/prdouct/prdouct.component';
import { authGuard } from './guard/auth.guard';
import {
  activeChildGuard,
  canDeactivate,
  resolveGuard,
  roleManagerGuard,
} from './guard/active-child.guard';
import { LoginComponent } from './components/login/login.component';
import { BuyComponent } from './components/prdouct/buy/buy.component';
import { AddToCartComponent } from './components/prdouct/add-to-cart/add-to-cart.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'view',
    canMatch: [roleManagerGuard],
    loadChildren: () =>
      import('./modules/admin-acc/admin-acc.module').then(
        (m) => m.AdminAccModule
      ),
  },
  {
    path: 'view',
    loadChildren: () =>
      import('./modules/user-acc/user-acc.module').then((m) => m.UserAccModule),
  },

  { path: 'about', component: AboutComponent },
  {
    path: 'product',
    component: PrdouctComponent,
    canActivate: [activeChildGuard],
    resolve: { product: resolveGuard },
    children: [
      {
        path: 'buy',
        component: BuyComponent,
        canDeactivate: [canDeactivate],
      },
      {
        path: 'add-to-cart',
        component: AddToCartComponent,
      },
    ],
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
