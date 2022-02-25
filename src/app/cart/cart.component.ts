import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/models/types';
import { ProductService } from '../product.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  faTimes = faTimes;
  cart: Product[] = [];
  name: string = '';
  address: string = '';
  card: number = 0;
  total: number = 0;
  confirm: boolean = false;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.cart = this.productService.fetchCart();
    this.cart.map((product) => {
      this.total += Math.round((product.price + Number.EPSILON) * 100) / 100;
    });
  }

  onSubmit(): void {
    console.log({ name: this.name, add: this.address, card: this.card });
    this.confirm = true;
  }
}
