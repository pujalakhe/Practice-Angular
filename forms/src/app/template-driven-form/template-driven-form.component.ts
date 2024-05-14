import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {
  
  @ViewChild('registrationForm') form!:NgForm
  onFormSubmitted(){
    console.log(this.form);
  }
  // onFormSubmitted(Form:NgForm){
  //   console.log(Form);
  // }
}
