import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  constructor() {}
  // declare and initialize the quote property
  // which will be a BehaviorSubject
  quote = new BehaviorSubject('');
  // expose the BehaviorSubject as an Observable
  currentQuote = this.quote.asObservable();
  // function to update the value of the BehaviorSubject
  updateQuote(newQuote: string) {
    this.quote.next(newQuote);
  }
}
