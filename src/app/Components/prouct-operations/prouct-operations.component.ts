import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-prouct-operations',
  templateUrl: './prouct-operations.component.html',
  styleUrls: ['./prouct-operations.component.css']
})
export class ProuctOperationsComponent implements OnInit {
  newProduct:any

  productId: any;
  product: any;
  operation: string = '';

  id1: string = '0';
  title: string = '';
  imageSorce: string = '';
  description: string = '';

  constructor(
    private nav: Router,
    private ProductsService: ProductsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['id'];
    this.operation = this.activatedRoute.snapshot.params['operation'];
    this.ProductsService.getProductById(this.productId).subscribe({
      next: (response) => {
        this.product = response;
        if (this.operation === 'edit') {
          console.log('Yes');
          this.id1 = this.product.id
          this.title = this.product.title
          this.imageSorce = this.product.src
          this.description = this.product.description
        }
      },
    });
  }

  confirm() {
    this.newProduct = {
      id: this.id1,
      title: this.title,
      src: this.imageSorce,
      description: this.description
    }
    if (this.operation === 'edit') {
       this.ProductsService.editProduct(this.productId, this.newProduct).subscribe();
    } else {
      this.ProductsService.addNewProduct(this.newProduct).subscribe()
    }
    this.nav.navigate(['/products'])
    }
}
