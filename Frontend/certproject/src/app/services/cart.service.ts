import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  emptyCart:Product[]=[]
  totalAmount: number=0

  constructor() { }

  private cart = new BehaviorSubject<Product[]>(this.emptyCart)
  currentCart = this.cart.asObservable()

  private grandTotal = new BehaviorSubject<number>(this.totalAmount)
  currentGrandTotal =this.grandTotal.asObservable()
  
  changeCart(newCart: Product[]){
    this.cart.next(newCart)
  }

  changeGrandTotal(newTotal: number){
    this.grandTotal.next(newTotal)
  }

  addToCart(product: Product){
    let newCart=[]
    let newTotal=0
    this.currentCart.subscribe(res=>newCart=res)
    this.currentGrandTotal.subscribe(res=>newTotal=res)
    newCart.push(product)
    newTotal+=(product.price-(product.price*(product.percentageDiscount/100)))
    this.changeCart(newCart)
    this.changeGrandTotal(newTotal)
  }
}
