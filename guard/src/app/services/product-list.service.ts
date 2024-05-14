import { Injectable } from '@angular/core';
import { Product } from './product-list';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  products!: Product[];
  constructor() {
    this.products = [
      new Product(1, 'Memory Card', 500),
      new Product(2, 'Pen Drive', 750),
      new Product(3, 'Power Bank', 100),
      new Product(4, 'Computer', 100),
      new Product(5, 'Laptop', 100),
      new Product(6, 'Printer', 100),
    ];
  }

  //or this
  // product:Product[]=[
  //   {productId:1,name:"lipblam",price:230},
  //   {productId:2,name:"fan",price:500},
  // ]

  getAllProducts() {
    // return this.products;
    return new Observable<Product[]>((sub) => {
      setTimeout(() => {
        sub.next(this.products);
      }, 5000);
    });
  }
}
