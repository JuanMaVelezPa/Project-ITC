import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService],
})
export class ProductsComponent implements OnInit {
  public products: Array<Product>;

  constructor(private _productService: ProductService) {
    this.products = [];
    this.getAllProducts();
  }

  getAllProducts() {
    return this._productService.getProducts().subscribe(
      (result) => {
        this.products = (result as any).products;
        this.getImages();
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }

  getImages() {
    let these = this;
    console.log(these);
    this.products.forEach(function (p) {
      // console.log(p);
      if (p.imageFile) {
        // console.log('image: ' + p.imageFile);
        p.imageFile =
          'http://localhost:7777/api/product/getImageByFileName/' + p.imageFile;
        // these._productService.getImage(p.imageFile).subscribe(
        //   (result) => {
        //     console.log('result');
        //     p.imageFile =
        //       'http://localhost:7777/api/product/getImageByFileName/' +
        //       p.imageFile;
        //   },
        //   (error) => {
        //     console.log('error:');
        //     console.log(<any>error);
        //   }
        // );
      }
    });
  }

  ngOnInit(): void {}
}
