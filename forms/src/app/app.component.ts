import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormarrayComponent } from './formarray/formarray.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    TemplateDrivenFormComponent,
    RouterOutlet,
    ReactiveFormComponent,
    RouterLink,
    RouterLinkActive,
    FormBuilderComponent,
    ReactiveFormsModule,
    FormsModule,
    FormarrayComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'forms';
}
