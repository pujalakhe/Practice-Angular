import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent implements OnInit{
  reactiveForm!:FormGroup;
  ngOnInit(){
    this.reactiveForm = new FormGroup(
      {
        firstName : new FormControl(null,Validators.required),
        lastName : new FormControl(null,[Validators.required,Validators.maxLength(10)]),
        email : new FormControl(null,[Validators.email,Validators.required]),
        phoneNo : new FormControl(null,[Validators.maxLength(10)]),
        dob : new FormControl(null,),
        userName : new FormControl(null),
        gender : new FormControl('male'),
        country:new FormControl('japan'),
        city : new FormControl(null),
        region : new FormControl(null),
      });
  }
  onFormSubmitted(){
    console.log(this.reactiveForm);
    
  }
}
