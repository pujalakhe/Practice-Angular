import { Component } from '@angular/core';
import { QuoteService } from '../../services/quote.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-quote',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-quote.component.html',
  styleUrl: './update-quote.component.css',
})
export class UpdateQuoteComponent {
  constructor(private quoteService: QuoteService) {}
  quote = '';
  // function to update the quote in the service
  submitHandler() {
    this.quoteService.updateQuote(this.quote);
    this.quote = '';
  }
}
