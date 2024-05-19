import { CommonModule, getLocaleFirstDayOfWeek } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.css',
})
export class FormBuilderComponent implements OnInit {
  formBuilder!: FormGroup;

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.formBuilder = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.maxLength(4)]],
      contactNumbers: this.fb.array([]), //initializing an empty array
    });
  }
  // Helper method to get the 'contactNumbers' FormArray
  contactNumbers() {
    return this.formBuilder.get('contactNumbers') as FormArray;
  }
  addContact() {
    const contact = this.fb.group({
      // Define your form controls here
      contact: [''],
    });

    // Add the new form group to the FormArray
    this.contactNumbers().push(contact);
  }
  removeContact(index: number) {
    this.contactNumbers().removeAt(index);
  }
  formSubmit() {
    console.log(this.fb);
  }
  OnSubmitted() {
    if (this.formBuilder.valid) {
      alert('form Submitted Successfully');
      // this.formBuilder.reset();
    } else {
      alert('Invalid Form');
      this.formBuilder.markAllAsTouched();
    }
  }
}
