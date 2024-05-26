import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Products } from './product';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'httpClient';
  myForm!: FormGroup;
  allProducts: Products[] = [];
  isFetching: boolean = false;
  editMode: boolean = false;
  currentProductId: string = '';
  errorMessage = null;
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.myForm = new FormGroup({
      pname: new FormControl(''),
      pdesc: new FormControl(''),
      pprice: new FormControl(''),
    });
    //call fetch method
    this.fetchProducts();
  }
  onProductCreate(products: { pname: string; pdesc: string; pprice: number }) {
    if (!this.editMode) {
      this.productService.createProduct(products);
    } else {
      this.productService.editProduct(this.currentProductId, products);
    }

    this.myForm.reset();
  }
  onProductFetch() {
    this.fetchProducts();
  }
  //get or fetch data from server
  private fetchProducts() {
    this.isFetching = true;
    this.productService.fetchProduct().subscribe((products) => {
      this.allProducts = products;
      this.isFetching = false;
    });
  }
  //deleting Product
  onDeleteProduct(id: string) {
    this.productService.deleteProduct(id);
  }
  onDeleteAllProduct() {
    this.productService.deleteAllProduct();
  }
  onEditProduct(id: string) {
    this.currentProductId = id;
    //get the product based on Id
    let currentProduct = this.allProducts.find((p) => {
      return p.id === id;
    });
    // console.log(this.myForm);
    //populated the form with the product details
    this.myForm.setValue({
      pname: currentProduct.pname,
      pdesc: currentProduct.pdesc,
      pprice: currentProduct.pprice,
    });
    //change the add button to update
    this.editMode = true;
  }
}
