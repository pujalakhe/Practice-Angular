import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'template';
  onsave() {
    console.log('saved Clicked');
  }
  onkeyDown(value: Event) {
    console.log('shift+o pressed');
  }
  message: string = 'waitting for number...';
  checkphoneno(arg: string)
  {
    if (arg.length===10 ) 
    {
      this.message = 'call you soon';
    } 
    else
    {
      this.message = 'phone no must be 10 digit';
    }
  }


  msg: string = 'Waiting for result...';
  checkAge(arg: string) {
      const age: number = Number.parseInt(arg);

      if (age >= 18) {
          this.msg = 'Yes, you can vote.';
      } else {
          this.msg = 'No, you can not vote.';
      }
  }

  name:string='';
  age:number=0;

  onSubmit(form:any){
    this.name = form.value.name;
    this.age = form.value.age;
  }
}
