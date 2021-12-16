import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderList : any = []
  constructor() { }
  
  ngOnInit(): void {
   this.orderList = [{
     "order_no" : "#2232323231",
     "email" : "example@gmail.com"
   },
  {
    "order_no" : "#9902323231",
     "email" : "noreply@gmail.com"
  },
  {
    "order_no" : "#2232323231",
    "email" : "example@gmail.com"
  },
 {
   "order_no" : "#9902323231",
    "email" : "noreply@gmail.com"
 }]
  }

}
