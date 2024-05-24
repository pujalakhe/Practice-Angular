import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-from-group',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './from-group.component.html',
  styleUrl: './from-group.component.css',
})
export class FromGroupComponent implements OnInit {
  groupForm!: FormGroup;
  isFormSubmitted: boolean = false;
  constructor(private builder: FormBuilder) {}
  ngOnInit() {
    this.groupForm = this.builder.group({
      firstName: [null, Validators.required],
      address: this.builder.group({
        country: ['', Validators.required],
        city: [''],
        region: [''],
      }),
    });
  }
  onFormSubmitted() {
    console.log(this.groupForm);
  }
  onSubmitted() {
    this.isFormSubmitted = true;
  }
}
