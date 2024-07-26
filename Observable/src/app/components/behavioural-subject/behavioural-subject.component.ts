//behavioural-subject.component.ts
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behavioural-subject',
  standalone: true,
  imports: [],
  templateUrl: './behavioural-subject.component.html',
  styleUrl: './behavioural-subject.component.scss',
})
export class BehaviouralSubjectComponent implements OnInit {
  ngOnInit(): void {
    const sub = new BehaviorSubject<number>(100);

    //subscriber1
    sub.subscribe((data) => {
      console.log(`subscriber1:${data}`);
    });
    //subscriber2
    sub.subscribe((data) => {
      console.log(`subscriber2:${data}`);
    });

    sub.next(2020);

    //subscriber3
    sub.subscribe((data) => {
      console.log(`subscriber3:${data}`);
    });

    sub.next(2023);
  }
}
