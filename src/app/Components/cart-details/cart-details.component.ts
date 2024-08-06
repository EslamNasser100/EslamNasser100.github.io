import { CartService } from './../../Services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css'],
})
export class CartDetailsComponent implements OnInit {
  products: any;
  // product: any;
  // productId: any;

  constructor(private cartServices: CartService) {}

  ngOnInit() {
    this.cartServices.getCartProducts().subscribe({
      next: (response) => {
        this.products = response;
      },
    });
  }

  delet(productId: any) {
    this.cartServices.deleteProduct(productId).subscribe({
      next: () => {
        this.products = this.products.filter(
          (product: any) => product.id !== productId
        );
      },
    });
  }
  pluse(productId: any, product: any) {
    this;
    this.cartServices.editProduct(productId, product).subscribe({
      next: () => {
        product.amount++;
      },
    });
  }
  munes(productId: any, product: any) {
    this.cartServices.editProduct(productId, product).subscribe({
      next: () => {
        if (product.amount === 1) {
          this.delet(productId);
        } else {
          product.amount--;
        }
      },
    });
  }
}
