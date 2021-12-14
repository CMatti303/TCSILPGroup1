import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  products: Product[]=[]
  topProducts: Product[]=[]
  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.products=this._productService.getAllProducts()
    this.find8TopProducts(this.products)
  }

  find8TopProducts(products: Product[]){
    for(let product of products){
      if(product.rating==10 && this.topProducts.length<8) this.topProducts.push(product)
      else if (product.rating==9 && this.topProducts.length<8) this.topProducts.push(product)
      else if (product.rating==8 && this.topProducts.length<8) this.topProducts.push(product)
    }
    console.log(this.topProducts)
  }

}
