import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
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
  ngOnInit() {
    this.groupForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      address: new FormGroup({
        country: new FormControl('', Validators.required),
        city: new FormControl(''),
        region: new FormControl(''),
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
