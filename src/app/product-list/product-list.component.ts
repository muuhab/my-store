import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/types';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((res) => {
      for (let index = 0; index < res.length; index++) {
        res[index].quantity = 0;
      }
      this.products = res;
    });
  }
}
