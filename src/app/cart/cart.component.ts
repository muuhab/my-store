import { Component, OnInit } from '@angular/core';
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
  nameError: string = '';
  address: string = '';
  addressError: string = '';
  card: string = '';
  cardError: string = '';
  total: number = 0;
  confirm: boolean = false;
  removed: boolean = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.removed = false;
    this.cart = this.productService.fetchCart();
    this.cart.map((product) => {
      this.total += Math.round((product.price + Number.EPSILON) * 100) / 100;
    });
  }

  onSubmit(): void {
    console.log({ name: this.name, add: this.address, card: this.card });
    this.confirm = true;
  }

  onRemove(product: Product): void {
    this.productService.removeFromCart(product);
    this.cart = this.productService.fetchCart();
    this.total -= Math.round((product.price + Number.EPSILON) * 100) / 100;
    this.removed = true;
    setTimeout(() => {this.removed = false}, 1500);

  }

  validateCard(change: string): void {
    this.cardError = '';
    if (change !== null) {
      if (change.toString().length < 16)
        this.cardError = 'Please enter valid credit card numbers';
      if (change.toString().length === 0)
        this.cardError = 'Please provide your credit card number';
    }
    if (change === null)
      this.cardError = 'Please provide your credit card number';
  }

  validateName(change: string): void {
    this.nameError = '';
    if (change.length < 6)
      this.nameError = 'Full name must contain at least 6 characters';
    if (change.length === 0) this.nameError = 'Please provide your full name';
  }

  validateAddress(change: string): void {
    this.addressError = '';
    if (change.length < 6)
      this.addressError = 'Full name must contain at least 6 characters';
    if (change.length === 0) this.addressError = 'Please provide your address';
  }
}
