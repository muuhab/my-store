import { Component, OnInit, Input,  } from '@angular/core';
import { Product } from '../../models/types';
import { ProductService } from '../../app/product.service';
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

  constructor(private productService: ProductService) {
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
  addToProduct(): void {
    this.productService.addToCart(this.product, parseInt(this.quant));
    alert(` ${this.product.name} added successfully`);
  }
}
