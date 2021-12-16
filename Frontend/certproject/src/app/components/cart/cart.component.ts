import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Product[]=[]
  grandTotal: number = 0
  
  constructor(private _cartService: CartService) { }

  ngOnInit(): void {
    this._cartService.currentCart.subscribe(res=>this.cart=res)
    this._cartService.currentGrandTotal.subscribe(res=>this.grandTotal=res)
  }

  removeProduct(product: Product){
    for(let i=0; i<this.cart.length; i++){
      if(this.cart[i]==product){
        this.cart = this.cart.slice(0, i).concat(this.cart.slice(i+1));
        break;
      }
    }
    this.grandTotal-=product.discountPrice
    this._cartService.changeCart(this.cart)
    this._cartService.changeGrandTotal(this.grandTotal)
  } 
}
