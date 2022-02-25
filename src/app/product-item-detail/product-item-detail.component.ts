import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/types';
import { ProductService } from '../../app/product.service';
import { Router} from '@angular/router';
import {
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  product: Product;
  id: number = 0;
  quant: string = '1';
  faShoppingCart = faShoppingCart;

  constructor(
    private productService: ProductService,
    private router: Router
  ) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
      quantity: 0,
    };
    this.id = this.router.getCurrentNavigation()?.id as number;
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((res) => {
      this.product = res.find((p) => p.id === this.id) as Product;
      this.product.quantity=0
    });
  }

  addToProduct(): void {
    this.productService.addToCart(this.product, parseInt(this.quant));
    alert(` ${this.product.name} added successfully`);
  }

}
