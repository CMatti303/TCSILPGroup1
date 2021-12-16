import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
  category_id=0;
  categoryName=''
  products: Product[]=[]

  cart: Product[]=[]
  grandTotal: number = 0

  constructor(private route: ActivatedRoute, private _productService: ProductService, private _cartService: CartService) { }

  ngOnInit(): void {
    this.category_id=parseInt(this.route.snapshot.paramMap.get('category_id') as string)
    this.products=this._productService.getProductsByCategory(this.category_id)
    this.categoryName=this._productService.getCategoryName(this.category_id)
    this._cartService.currentCart.subscribe(res=>this.cart=res)
    this._cartService.currentGrandTotal.subscribe(res=>this.grandTotal=res)
  }

  filterProducts(num1: number, num2: number){
    this.products=this._productService.getProductsByCategory(this.category_id)
    let filteredProducts = this.products.filter(product=>{
      return (product.price>=num1 && product.price<=num2)
    })
    this.products=filteredProducts
  }

  addToCart(product: Product){
    this._cartService.addToCart(product)
  }
}
