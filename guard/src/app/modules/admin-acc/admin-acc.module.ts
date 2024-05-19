import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminAccRoutingModule } from './admin-acc-routing.module';
import { AdminViewComponent } from './admin-view/admin-view.component';


@NgModule({
  declarations: [
    AdminViewComponent
  ],
  imports: [
    CommonModule,
    AdminAccRoutingModule
  ]
})
export class AdminAccModule { }
