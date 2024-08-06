import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  
  products: any;

  constructor(private nav:Router, private productsServices: ProductsService){}
  
  ngOnInit(): void {
    this.productsServices.getProducts().subscribe({
      next: (response) => {
        this.products = response;
      },
    });
  }

  details(id:any) {
    this.nav.navigate([`/products/${id}`])
  }
}




