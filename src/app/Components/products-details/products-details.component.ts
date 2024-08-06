import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css'],
})
export class ProductsDetailsComponent implements OnInit {
  productId: any;
  product: any;
  products: any;
  newProduct: any;

  title: any;
  imageSrc: any;
  description: any;

  constructor(
    private nav: Router,
    private ProductsService: ProductsService,
    private cartService: CartService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['id'];
    this.ProductsService.getProductById(this.productId).subscribe({
      next: (response) => {
        this.product = response;
        this.title = this.product.title;
        this.imageSrc = this.product.src;
        this.description = this.product.description;
      },
    });
    this.ProductsService.getProducts().subscribe({
      next: (response) => {
        this.products = response;
      },
    });
  }
  edit() {
    this.nav.navigate([`/products/${this.productId}/edit`]);
  }

  add() {
    const productToAdd = {
      id: this.activatedRoute.snapshot.params['id'],
      product: this.title,
      amount: 1,
      price: 600,
    };
    this.cartService.addNewProduct(productToAdd).subscribe();
    this.nav.navigate(['/cart']);
  }

  delet() {
    this.nav.navigate(['/products']);
    this.ProductsService.deleteProduct(this.productId).subscribe({
      next: () => {
        this.products = this.products.filter(
          (product: any) => product.id != this.productId
        );
      },
    });
  }
}
