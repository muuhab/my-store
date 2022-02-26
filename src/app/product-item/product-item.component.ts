import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/types';
import { faEye, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  quant: string = '1';
  faEye = faEye;
  faShoppingCart = faShoppingCart;
  @Output() addedAlert: EventEmitter<{ product: Product; quant: string }> =
    new EventEmitter();

  constructor() {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
      quantity: 0,
    };
  }

  ngOnInit(): void {}
}
