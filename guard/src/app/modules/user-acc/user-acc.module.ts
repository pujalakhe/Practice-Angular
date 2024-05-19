import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAccRoutingModule } from './user-acc-routing.module';
import { UserViewComponent } from './user-view/user-view.component';


@NgModule({
  declarations: [
    UserViewComponent
  ],
  imports: [
    CommonModule,
    UserAccRoutingModule
  ]
})
export class UserAccModule { }
