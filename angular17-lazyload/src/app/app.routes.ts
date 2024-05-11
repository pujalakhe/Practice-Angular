import { Routes } from '@angular/router';
import path from 'node:path';
import { NonLazyComponenetComponent } from './components/non-lazy-componenet/non-lazy-componenet.component';

export const routes: Routes = [
    {path:'non-lazy-component',component:NonLazyComponenetComponent},
    {path:'lazy-component',loadComponent:()=>import('./components/lazy-componenet/lazy-componenet.component').then(c=>c.LazyComponenetComponent)}
];
