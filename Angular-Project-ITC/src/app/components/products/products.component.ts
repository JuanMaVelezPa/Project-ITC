import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService],
})
export class ProductsComponent implements OnInit {
  public products: [];

  constructor(private _productService: ProductService) {
    this.products = [];
    this.getAllProducts();
  }

  ngOnInit(): void {}

  getAllProducts() {
    return this._productService.getProducts().subscribe(
      (result) => {
        console.log(result);
        this.products = (result as any).products;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
