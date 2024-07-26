//subject.component.ts
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.scss',
})
export class SubjectComponent implements OnInit {
  ngOnInit(): void {
    // unicast Observable provide diff results to the subscriber
    let obs = new Observable((observer) => observer.next(Math.random()));

    //subscriber1
    obs.subscribe((data) => {
      console.log(`Data from Observable:${data}`);
    });
    //subscriber2
    obs.subscribe((data) => {
      console.log(`Data from Observable:${data}`);
    });

    //multicast subject provide same data to all subscriber emitting from same subject
    const sub = new Subject();

    //subscriber1
    sub.subscribe((data) => {
      console.log(`Data from subject:${data}`);
    });
    //subscriber2
    sub.subscribe((data) => {
      console.log(`Data from subject:${data}`);
    });
    sub.next(Math.random());

    //Subject as Consumer
    const subjAsConsumer = new Subject();
    // Ajax call
    const data = ajax('https://randomuser.me/api/');
    //subscriber1
    subjAsConsumer.subscribe((res) => {
      console.log(` subject As consumer:${res}`);
    });
    //subscriber2
    subjAsConsumer.subscribe((res) => {
      console.log(`subject As consumer:${res}`);
    });
    data.subscribe(subjAsConsumer);
  }
}
