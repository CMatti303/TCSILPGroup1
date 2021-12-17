import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Category';
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

  randomCategories: Category[]=[]
 // bannerCategories: Category[]=[]

  constructor(private _productService: ProductService, private _cartService: CartService) {
    
   }

  ngOnInit(): void {
    //this.products=this._productService.getAllProducts()
    this._productService.getProducts().subscribe((res)=>{
      this.products=res
      console.log("homepage", this.products)
      this.find8TopProducts(this.products)
    })
    this._cartService.currentCart.subscribe(res=>this.cart=res)
    this._cartService.currentGrandTotal.subscribe(res=>this.grandTotal=res)
    this._productService.get3RandomCategories().subscribe(res=>this.randomCategories=res)
    console.log(this.randomCategories)
  //  this._productService.getBannerImgs().subscribe(res=>this.bannerCategories=res)
  
  }

 find8TopProducts(products: Product[]){
    for(let product of products){
      if(product.isTopProduct && this.topProducts.length<8) this.topProducts.push(product)
      
    }
  } 

  addToCart(product: Product){
    this._cartService.addToCart(product)
  }

}
