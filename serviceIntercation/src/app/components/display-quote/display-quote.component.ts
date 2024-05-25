import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../../services/quote.service';

@Component({
  selector: 'app-display-quote',
  standalone: true,
  imports: [],
  templateUrl: './display-quote.component.html',
  styleUrl: './display-quote.component.css',
})
export class DisplayQuoteComponent implements OnInit {
  constructor(private quoteService: QuoteService) {}
  currentQuote: string = '';
  ngOnInit() {
    // Subscribe the currentQuote property of quote service to get real time value
    this.quoteService.currentQuote.subscribe(
      (quote) => (this.currentQuote = quote)
    );
  }
}
