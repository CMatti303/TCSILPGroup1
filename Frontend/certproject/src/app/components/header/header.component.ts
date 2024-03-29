import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
numOfItemsInCart: number=0
  constructor( private _cartService: CartService) { }

  ngOnInit(): void {
    this._cartService.currentCart.subscribe(res=>{this.numOfItemsInCart=res.length})
  }

}
