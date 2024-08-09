import { Routes } from '@angular/router';
import { LoginComponent } from './componenets/login/login.component';
import { DashboardComponent } from './componenets/dashboard/dashboard.component';
import { RegisterComponent } from './componenets/register/register.component';
import { LayoutComponent } from './componenets/shared/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
];
