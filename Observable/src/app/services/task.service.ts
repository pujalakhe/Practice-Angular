//task.service.ts
import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}
  // using EventEmitter
  //1.creating an event;here createTask can be viewed as an observable
  // createTask: EventEmitter<string> = new EventEmitter<string>();

  // //2.raising the event
  // onCreateTask(val: string) {
  //   this.createTask.emit(val);
  // }

  //using Subject
  createTask = new Subject<string>();

  //2.raising the event
  onCreateTask(val: string) {
    this.createTask.next(val); //next is used instead of emit
  }
}
