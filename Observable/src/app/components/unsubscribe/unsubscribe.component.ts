// unsubscribe.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-unsubscribe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './unsubscribe.component.html',
  styleUrl: './unsubscribe.component.scss',
})
export class UnsubscribeComponent {
  // 1.Creating an Observable
  counter = interval(1000); //this will emit number in every 1 sec
  //variable to store the data emitted by observable
  data: number[] = [];
  subscriber: any;

  //2.subscribe to the observable
  onSubscribeClicked() {
    this.subscriber = this.counter.subscribe({
      next: (val) => {
        this.data.push(val);
      },
    });
  }

  // 3.unsubscribe
  onUnsubscribeClicked() {
    this.subscriber.unsubscribe();
    alert('Unsubscribed');
  }
}
