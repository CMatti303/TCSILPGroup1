import { Injectable } from '@angular/core';
import { Category } from '../Category';
import { Product } from '../Product';

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
      image: "",
      description: "6.7-inch Super Retina XDR Display ",
      createdOn: new Date(),
      isTopProduct: true
      },
    {
      id: 2,
      name: "iPhone 12 Pro Max",
      category_id: 1,
      price: 860,
      discountPrice:550,
      image: "",
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
      image: "",
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
    name: "Mobile Phones"
  },
  {
    id: 2,
    name: "TVs"
  },
  {
    id: 3,
    name: "Furniture"
  },
]
 constructor() { }

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

 getProductsByCategory(id: number){
  return this.productArray.filter(product=>{
    if(product.category_id==id) return true
    else return false
  })
}

}
