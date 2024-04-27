import { Component } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-usefactor',
  templateUrl: './usefactor.component.html',
  styleUrl: './usefactor.component.css'
})
export class UsefactorComponent {
  products!: Product[];

  constructor(private productService: ProductService) {}

  getProducts() {
    this.products = this.productService.getProducts();
  }
}
