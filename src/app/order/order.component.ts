import { Component, OnInit } from '@angular/core';
import {OrderService} from '../services/order.service';
import {Order} from '../models/order.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders: any;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orders = this.orderService.onGet();
  }

}
