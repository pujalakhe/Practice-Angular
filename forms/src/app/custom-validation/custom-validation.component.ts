import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  Validators,
} from '@angular/forms';
import { CustomVAlidators } from '../validators/noSpaceAllow.validators';

@Component({
  selector: 'app-custom-validation',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './custom-validation.component.html',
  styleUrl: './custom-validation.component.css',
})
export class CustomValidationComponent {
  passwordGroup!: FormGroup;
  constructor() {
    this.passwordGroup = new FormGroup(
      {
        password: new FormControl(null, Validators.required),
        confirmPassword: new FormControl(null),
      },
      [CustomVAlidators.notEqual('password', 'confirmPassword')]
    );
  }
  onFormSubmitted() {
    console.log(this.passwordGroup);
  }
  onSubmitted() {}
}
