import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css'],
  providers: [ProductService],
})
export class NewProductComponent implements OnInit {
  public title: string;
  public product: Product;

  constructor(private _productService: ProductService) {
    this.title = 'Crear Producto';
    this.product = new Product('', '', '', '', '', '', '');
  }

  ngOnInit(): void {}

  onSubmit(productForm: NgForm) {
    console.log(this.product);
    return this._productService.newProduct(this.product).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }
}
