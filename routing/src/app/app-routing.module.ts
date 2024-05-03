import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { CourseComponent } from './Components/course/course.component';
import { SearchComponent } from './Components/search/search.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // {path:'', redirectTo: 'home', pathMatch:'full'},//redirects to home
  {
    path: 'home',
    component: HomeComponent,
    children:[ {
      path: 'course',
      component: CourseComponent,
    },]
  },
  {
    path: 'course',
    component: CourseComponent,
  },
  { path: 'about', component: AboutComponent },
  {path:'search',component:SearchComponent},
  { path: '**', component: PageNotFoundComponent }, //wildcard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // providers:[provideRouter(routes)]
})
export class AppRoutingModule {}
