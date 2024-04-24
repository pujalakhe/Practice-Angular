import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as components from './import';
import { TemplatereferenceComponent } from './templatereference/templatereference.component';

@NgModule({
  declarations: [
    AppComponent,
    components.AttributeDirectiveComponent,
    components.StructuralDirectiveComponent,
    TemplatereferenceComponent,
    components.HoverDirective,
    components.CustomdirectiveComponent,
    components.IfDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
