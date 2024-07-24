// app.component.ts
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { rejects } from 'assert';
import { count } from 'console';
import { resolve } from 'path';
import { Observable, of, from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  title = 'Observable';
  data: number[] = [];
  array1 = [1, 2, 3, 4];
  array2 = ['a', 'b', 'c', 'd'];
  @ViewChild('event')
  createBtn!: ElementRef;
  DomObservable$: any;
  // //1.Create an observable
  // myObservable$ = new Observable((observer) => {
  //   // observer.next([1, 2, 3, 4, 5]);
  //   //to display data every 1sec
  //   setTimeout(() => {
  //     observer.next(1);
  //   }, 1000);
  //   setTimeout(() => {
  //     observer.next(2);
  //   }, 2000);
  //   setTimeout(() => {
  //     observer.next(3);
  //   }, 3000);
  //   // emitting the error manually
  //   setTimeout(() => {
  //     observer.error(new Error('Something went wrong!'));
  //   }, 4000);
  //   setTimeout(() => {
  //     observer.next(4);
  //   }, 4000);
  //   setTimeout(() => {
  //     observer.next(5);
  //   }, 5000);
  //   setTimeout(() => {
  //     observer.complete();
  //   }, 6000);
  // });

  // getAsyncData() {
  //   //observer which will handle the observable event emitter.
  //   //next,error,complete
  //   //old way to handle observable
  //   // this.myObservable$.subscribe((val: any) => {
  //   //   // this.data = val;
  //   //   //get data in every 1sec
  //   //   this.data.push(val);
  //   // });

  //   this.myObservable$.subscribe({
  //     next: (val: any) => {
  //       this.data.push(val);
  //     },
  //     error(err) {
  //       alert(err);
  //     },
  //     complete() {
  //       alert('all data has been received successfully');
  //     },
  //   });
  // }

  // ObservableUsingofOperator$ = of(
  //   this.array1,
  //   this.array2,
  //   20,
  //   30,
  //   'A',
  //   'B',
  //   true,
  //   false
  // );

  // ObservableUsingfromOperator$ = from('2345689');//string
  // ObservableUsingfromOperator$ = from(this.array1);//array

  //promise to Observable
  promiseData = new Promise((resolve, reject) => {
    resolve([44, 45, 96, 88, 12]);
  });
  ObservableUsingfromOperator$ = from(this.promiseData);

  asyncData() {
    // this.ObservableUsingofOperator$.subscribe({
    this.ObservableUsingfromOperator$.subscribe({
      next: (val: any) => {
        this.data.push(val);
      },
      error(err) {
        alert(err);
      },
      complete() {
        alert('all data has been received successfully');
      },
    });
  }

  //observable from DOM event
  buttonClicked() {
    let count = 0;
    this.DomObservable$ = fromEvent(
      this.createBtn.nativeElement,
      'click'
    ).subscribe((ev) => {
      console.log(ev);
      this.showItem(++count);
    });
  }

  //calling the buttonClicked() method
  ngAfterViewInit(): void {
    this.buttonClicked();
  }

  showItem(val: any) {
    let div = document.createElement('div');
    div.innerText = 'Item' + val;
    document.getElementById('container')?.appendChild(div);
  }
}
