// map-operator.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { from, map, filter } from 'rxjs';

@Component({
  selector: 'app-map-operator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map-operator.component.html',
  styleUrl: './map-operator.component.scss',
})
export class MapOperatorComponent {
  result: number[] = [];
  myObservables$ = from([2, 3, 4, 5, 6, 8, 10, 12]);
  targetObservable$ = this.myObservables$.pipe(
    map((val) => {
      return val * 5;
    })
  );

  filteredObs$ = this.targetObservable$.pipe(
    filter((val, i) => {
      return val % 4 === 0;
    })
  );
  getData() {
    this.targetObservable$.subscribe({
      next: (val: any) => {
        this.result.push(val);
      },
      error(err) {
        alert('something went wrong');
      },
      complete() {
        alert('all data are streamed successfully');
      },
    });
  }
  filterData() {
    this.filteredObs$.subscribe({
      next: (val: any) => {
        this.result.push(val);
      },
      error(err) {
        alert('something went wrong');
      },
      complete() {
        alert('all data are streamed successfully');
      },
    });
  }
  // one way
  chainObs$ = this.myObservables$.pipe(
    map((val) => {
      return val * 5;
    }),
    filter((val, i) => {
      return val % 4 === 0;
    })
  );

  // //another way
  // myObservables$ = from([2, 3, 4, 5, 6, 8, 10, 12]).pipe(
  //   map((val) => {
  //     return val * 5;
  //   }),
  //   filter((val, i) => {
  //     return val % 4 === 0;
  //   })
  // );
  resultfromChain() {
    // this.myObservables$.subscribe({
    this.chainObs$.subscribe({
      // this.chainObs$.subscribe({
      next: (val: any) => {
        this.result.push(val);
      },
      error(err) {
        alert('something went wrong');
      },
      complete() {
        alert('all data are streamed successfully');
      },
    });
  }
}
