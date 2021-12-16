import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  products: Product[]=[]
  currentProduct: any = this.products[0]
  productId: any
  recommendedProducts: Product[]=[]
  mostRecommendedProducts: Product[]=[]
  leastRecommendedProducts: Product[]=[]
  constructor(private _productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.products=this._productService.getAllProducts()
    const Id = this.route.snapshot.paramMap.get('product_id') as string
    this.currentProduct = this.products.find(product => product.id === parseInt(Id))
    this.findRecommendedProducts(this.products)
  }

  // Find recommended Products based on name and description
  findRecommendedProducts(products: Product[]){
    for(let product of products){
      if(product.name.toLowerCase().includes(this.currentProduct.name.toLowerCase())
        || product.description.toLocaleLowerCase().includes(this.currentProduct.description.toLowerCase())){
        this.mostRecommendedProducts.push(product)
      }
      else{
        this.leastRecommendedProducts.push(product)
      }
    }
    this.recommendedProducts = this.mostRecommendedProducts.concat(this.leastRecommendedProducts)
  }

}
