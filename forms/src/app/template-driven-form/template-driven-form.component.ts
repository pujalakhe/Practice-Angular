import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule, FormsModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css',
})
export class TemplateDrivenFormComponent {
  isFormSubmitted: boolean = false;
  //creating an obj
  userObj: any = {
    name: '',
    email: '',
    userName: '',
    isAgree: false,
  };
  onSubmitted(form: NgForm) {
    const isFormValid = form.form.valid;
    this.isFormSubmitted = true;
    if (isFormValid) {
      alert('success');
    } else {
      alert('invalid');
    }
  }
}
