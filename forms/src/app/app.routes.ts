import { Routes } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormarrayComponent } from './formarray/formarray.component';
import { CustomValidationComponent } from './custom-validation/custom-validation.component';

export const routes: Routes = [
  { path: 'reactive', component: ReactiveFormComponent },
  { path: 'template', component: TemplateDrivenFormComponent },
  { path: 'builder', component: FormBuilderComponent },
  { path: 'formarray', component: FormarrayComponent },
  { path: 'customValidation', component: CustomValidationComponent },
];
