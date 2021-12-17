import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../Category';
import { Product } from '../Product';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productArray: Product[]=[
    {
      id: 1,
      name: "Samsung Galaxy S20",
      category_id: 1,
      price: 360,
      discountPrice:350,
      image: "assets/img/category/mobile.png",
      description: "6.7-inch Super Retina XDR Display",
      createdOn: new Date(),
      isTopProduct: true
      },
    {
      id: 2,
      name: "iPhone 12 Pro Max",
      category_id: 1,
      price: 860,
      discountPrice:550,
      image: "assets/img/category/mobile.png",
      description: "128GB, Navy Blue ",
      createdOn: new Date(),
      isTopProduct: true
      },
    {
      id: 3,
      name: "Straight Talk Motorola Moto G Play",
      category_id: 1,
      price: 560,
      discountPrice:550,
      image: "assets/img/category/mobile.png",
      description: "32GB, Blue ",
      createdOn: new Date(),
      isTopProduct: true
      },
    {
      id: 4,
      name: "Toshiba",
      category_id: 2,
      price: 199,
      discountPrice:199,
      image: "",
      description: "Class V35 Series LED Full HD Smart Fire TV",
      createdOn: new Date(),
      isTopProduct: false
      }, 
    {
      id: 5,
      name: "Class FHD (1080P) LED Roku",
      category_id: 2,
      price: 360,
      discountPrice:350,
      image: "",
      description: "Smart TV HDR ",
      createdOn: new Date(),
      isTopProduct: true
      },
    {
      id: 6,
      name: "High End Office Desks Ceo Furniture Office Table",
      category_id: 3,
      price: 500,
      discountPrice:500,
      image: "",
      description: "Executive Desk Furniture L Shape Desk Luxury Ceo Table",
      createdOn: new Date(),
      isTopProduct: true
      },
    {
      id: 7,
      name: "High End Office Lamp",
      category_id: 3,
      price: 100,
      discountPrice:90,
      image: "",
      description: "Executive Luxury Ceo Lamp",
      createdOn: new Date(),
      isTopProduct: true
      },
    {
      id: 8,
      name: "High End Office Chair",
      category_id: 3,
      price: 100,
      discountPrice:75,
      image: "",
      description: "Executive Desk Furniture Chair",
      createdOn: new Date(),
      isTopProduct: true
      },
    {
      id: 9,
      name: "Office Storage Cabinet",
      category_id: 3,
      price: 500,
      discountPrice:455,
      image: "",
      description: "Shelf Storage Cabinet",
      createdOn: new Date(),
      isTopProduct: true
    }
  ]

 categoryArr: Category[]=[
  {
    id: 1,
    name: "Mobile Phones",
    image:"src/app/assets/img/category/mobile.png"
  },
  {
    id: 2,
    name: "TVs",
    image:"src/app/assets/img/category/tv.png"
  },
  {
    id: 3,
    name: "Furniture",
    image:"src/app/assets/img/category/furniture.png"
  },
  {
    id: 4,
    name: "Books",
    image:"assets/images/category/books.jpg"
  },
  {
    id: 5,
    name: "Electronics",
    image:"assets/images/category/electronics.png"
  }, {
    id: 6,
    name: "Sports",
    image:"assets/images/category/sports.jpg"
  },
] 

 categoryUrl="http://localhost:3000/api/v1/homepage/categories"
 productUrl="http://localhost:3000/api/v1/products"

 constructor(private http: HttpClient) { }

  get3RandomCategories(): Observable<any>{
  return this.http.get(this.categoryUrl)
 }

  getProducts(): Observable<any>{
      return this.http.get(this.productUrl)
  } 

  getProductsByCategory(id: number): Observable<any>{
    return this.http.get(this.productUrl+"/"+id)
  }
///hard coded methods
  getAllProducts(){
    return this.productArray
  } 
  
  getCategoryName(num:number){
    let name=''
    for(let item of this.categoryArr){
      if (item.id==num)
      name=item.name
    }
   return name
  }  

}