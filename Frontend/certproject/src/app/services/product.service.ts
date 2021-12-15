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
    img: "",
    description: "6.7-inch Super Retina XDR Display ",
    rating:8,
    percentageDiscount:10},
  {
    id: 2,
    name: "iPhone 12 Pro Max",
    category_id: 1,
    price: 860,
    img: "",
    description: "128GB, Navy Blue ",
    rating:10,
    percentageDiscount:10},
  {
    id: 3,
    name: "Straight Talk Motorola Moto G Play",
    category_id: 1,
    price: 560,
    img: "",
    description: "32GB, Blue ",
    rating:10,
    percentageDiscount:30},
  {
    id: 4,
    name: "Toshiba",
    category_id: 2,
    price: 199,
    img: "",
    description: "Class V35 Series LED Full HD Smart Fire TV",
    rating:10,
    percentageDiscount:0},  
  {
    id: 5,
    name: "Class FHD (1080P) LED Roku",
    category_id: 2,
    price: 360,
    img: "",
    description: "Smart TV HDR ",
    rating:10,
    percentageDiscount:0},
  {
    id: 6,
    name: "High End Office Desks Ceo Furniture Office Table",
    category_id: 3,
    price: 500,
    img: "",
    description: "Executive Desk Furniture L Shape Desk Luxury Ceo Table",
    rating:10,
    percentageDiscount:40},
  {
    id: 7,
    name: "High End Office Lamp",
    category_id: 3,
    price: 100,
    img: "",
    description: "Executive Luxury Ceo Lamp",
    rating:1,
    percentageDiscount:0},
  {
    id: 8,
    name: "High End Office Chair",
    category_id: 3,
    price: 100,
    img: "",
    description: "Executive Desk Furniture Chair",
    rating:10,
    percentageDiscount:10},
  {
    id: 9,
    name: "Office Storage Cabinet",
    category_id: 3,
    price: 500,
    img: "",
    description: "Shelf Storage Cabinet",
    rating:10,
    percentageDiscount:0}
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
