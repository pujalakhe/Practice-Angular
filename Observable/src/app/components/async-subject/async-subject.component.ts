import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-async-subject',
  standalone: true,
  imports: [],
  templateUrl: './async-subject.component.html',
  styleUrl: './async-subject.component.scss',
})
export class AsyncSubjectComponent implements OnInit {
  ngOnInit(): void {
    const asyncsub = new AsyncSubject();
    console.log('AsyncSubject');
    asyncsub.next(100);
    asyncsub.next(200);
    asyncsub.next(300);
    asyncsub.complete();

    //subscriber1
    asyncsub.subscribe((data) => {
      console.log(`subscriber1:${data}`);
    });
    //subscriber2
    asyncsub.subscribe((data) => {
      console.log(`subscriber2:${data}`);
    });

    asyncsub.next(2020);

    //subscriber3
    asyncsub.subscribe((data) => {
      console.log('After new value has been emitted i.e.2020');

      console.log(`subscriber3:${data}`);
    });

    asyncsub.next(2023);
  }
}
