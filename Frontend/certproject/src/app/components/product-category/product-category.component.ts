import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Product';
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

  constructor(private route: ActivatedRoute, private _productService: ProductService) { }

  ngOnInit(): void {
    this.category_id=parseInt(this.route.snapshot.paramMap.get('category_id') as string)
    this.products=this._productService.getProductsByCategory(this.category_id)
    this.categoryName=this._productService.getCategoryName(this.category_id)
    console.log(this.category_id)
  }

  filterProducts(num1: number, num2: number){
    this.products=this._productService.getProductsByCategory(this.category_id)
    let filteredProducts = this.products.filter(product=>{
      return (product.price>=num1 && product.price<=num2)
    })
    this.products=filteredProducts
  }
}
