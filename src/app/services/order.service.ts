import { Injectable } from '@angular/core';
import {Order} from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orders: Order[] = [
    {
    id: 1,
    productName: 'Samsung A50',
    price: '150 000',
    country: 'Korea',
    email: 'e.serik@gmail.com'
    },
    {
      id: 2,
      productName: 'Sony',
      price: '50 000',
      country: 'China',
      email: 'bekk@gmail.com'
    }
  ];
  constructor() { }

  onGet(){
    return this.orders;
  }
}
