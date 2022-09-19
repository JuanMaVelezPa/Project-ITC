import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../model/Product';

@Injectable()
export class ProductService implements OnInit {
  urlBase: string;

  constructor(public _http: HttpClient) {
    this.urlBase = 'http://localhost:7777/api/product';
  }
  ngOnInit(): void {}

  getProductById(id: string) {
    return this._http.get(this.urlBase + '/getProductById/' + ' ');
  }

  getProducts() {
    return this._http.get(this.urlBase + '/getProducts');
  }

  getImage(imageFile: string) {
    return this._http.get(this.urlBase + '/getImageByFileName/' + imageFile);
  }

  newProduct(product: Product) {
    let productJson = JSON.stringify(product);
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    console.log(productJson);
    return this._http.post(this.urlBase + '/newProduct', productJson, {
      headers: header,
    });
  }
}
