import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url: string = "http://localhost:3000/products";
  constructor(private http: HttpClient) { }
  getProducts() {
    return this.http.get(this.url);
  }
    getProductById(id: any) {
    return this.http.get(`${this.url}/${id}`);
  }

  addNewProduct(product: any) {
    return this.http.post(this.url, product);
  }
  editProduct(id: any, product: any) {
    return this.http.put(`${this.url}/${id}`, product);
  }

  deleteProduct(productId: any) {
    return this.http.delete(`${this.url}/${productId}`);
  }
}

