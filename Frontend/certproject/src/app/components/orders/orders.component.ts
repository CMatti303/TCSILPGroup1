import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  ordersList : any = []
  constructor() { }
  
  ngOnInit(): void {
   this.ordersList = [{
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
