import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  products: Product[]=[]
  topProducts: Product[]=[]

  cart: Product[]=[]
  grandTotal: number = 0

  constructor(private _productService: ProductService, private _cartService: CartService) { }

  ngOnInit(): void {
    this.products=this._productService.getAllProducts()
    this.find8TopProducts(this.products)
    this._cartService.currentCart.subscribe(res=>this.cart=res)
    this._cartService.currentGrandTotal.subscribe(res=>this.grandTotal=res)
  }

  find8TopProducts(products: Product[]){
    for(let product of products){
      if(product.rating==10 && this.topProducts.length<8) this.topProducts.push(product)
      else if (product.rating==9 && this.topProducts.length<8) this.topProducts.push(product)
      else if (product.rating==8 && this.topProducts.length<8) this.topProducts.push(product)
    }
  }

  addToCart(product: Product){
    this._cartService.addToCart(product)
  }
}
