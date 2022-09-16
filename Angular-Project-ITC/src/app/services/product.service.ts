import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ProductService implements OnInit {
  urlBase: string;

  constructor(public _http: HttpClient) {
    this.urlBase = 'http://localhost:7777/api/product/';
  }
  ngOnInit(): void {}

  getProductById(id: string) {
    return this._http.get(
      this.urlBase + '/getProductById/' + '6323b362aef1c89143e0d77e'
    );
  }

  getProducts() {
    return this._http.get(this.urlBase + '/getProducts');
  }
}
