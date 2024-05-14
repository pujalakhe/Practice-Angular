import { Component, OnInit, inject } from '@angular/core';
import { ProductListService } from '../../services/product-list.service';
import { Product } from '../../services/product-list';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-prdouct',
  templateUrl: './prdouct.component.html',
  styleUrl: './prdouct.component.css',
})
export class PrdouctComponent implements OnInit {
  productService = inject(ProductListService);
  allProducts: Product[] = [];
  constructor(private routed: ActivatedRoute) {}
  ngOnInit() {
    // this.allProducts = this.productService.getAllProducts();
    this.allProducts = this.routed.snapshot.data['product'];
  }
}
