import { Component } from '@angular/core';
import { Product } from '../usefactor/product';
import { ProductService } from '../usefactor/product.service';
@Component({
  selector: 'app-useexisting',
  templateUrl: './useexisting.component.html',
  styleUrl: './useexisting.component.css'
})
export class UseexistingComponent {
  products!: Product[];

  constructor(private productService: ProductService) {}

  getProducts() {
    this.products = this.productService.getProducts();
  }
}
