import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CustomVAlidators } from '../validators/noSpaceAllow.validators';
@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent implements OnInit {
  reactiveForm!: FormGroup;
  isFormSubmitted: boolean = false;
  ngOnInit() {
    this.reactiveForm = new FormGroup({
      firstName: new FormControl(null, [
        Validators.required,
        CustomVAlidators.noSpaceAllowed,
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        Validators.maxLength(10),
        CustomVAlidators.noSpaceAllowed,
      ]),
      email: new FormControl(null, [Validators.email, Validators.required]),
      phoneNo: new FormControl(null, [
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      dob: new FormControl(null),
      userName: new FormControl(null),
      gender: new FormControl('female'),
      address: new FormGroup({
        country: new FormControl('nepal'),
        city: new FormControl(null, Validators.required),
        region: new FormControl(null),
      }),
      skills: new FormArray([
        new FormControl(null),
        new FormControl(null),
        new FormControl(null),
      ]),
    });
  }
  onFormSubmitted() {
    console.log(this.reactiveForm);
  }
  onSubmitted() {
    this.isFormSubmitted = true;
    if (this.reactiveForm.valid) {
      alert('form Submitted Successfully');
      this.reactiveForm.reset();
    } else {
      alert('Invalid Form');
    }
  }
}
