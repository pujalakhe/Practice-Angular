import { Component, OnInit } from '@angular/core';
import { log } from 'console';
import { ReplaySubject } from 'rxjs';
@Component({
  selector: 'app-replay-subject',
  standalone: true,
  imports: [],
  templateUrl: './replay-subject.component.html',
  styleUrl: './replay-subject.component.scss',
})
export class ReplaySubjectComponent implements OnInit {
  ngOnInit(): void {
    const sub = new ReplaySubject();
    console.log('ReplaySubject');
    sub.next(100);
    sub.next(200);
    sub.next(300);

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
      console.log('After new value has been emitted i.e.2020');

      console.log(`subscriber3:${data}`);
    });

    sub.next(2023);
  }
}
