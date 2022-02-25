import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/types';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  cart: Product[] = [];

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:4200/assets/data.json');
  }

  addToCart(product: Product, quant: number): void {
    product.quantity+=quant;
    for (let index = 0; index < this.cart.length; index++) {
      if (this.cart[index].id === product.id) {
        this.cart[index].quantity+=quant
      }
    }
    this.cart.map((p) => p.id).includes(product.id)
      ? null
      : this.cart.push(product);
  }

  fetchCart(): Product[] {
    return this.cart;
  }
}
