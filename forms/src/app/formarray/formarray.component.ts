import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-formarray',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formarray.component.html',
  styleUrl: './formarray.component.css',
})
export class FormarrayComponent {
  userForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      contactNumbers: this.fb.array([]), // Initialize an empty FormArray
    });
  }
  // Helper method to get the 'items' FormArray
  contactNumbers() {
    return this.userForm.get('contactNumbers') as FormArray;
  }
  addContact() {
    const contact = this.fb.group({
      // Define your form controls here
      contact: [''],
    });

    // Add the new form group to the FormArray
    this.contactNumbers().push(contact);
  }
}
