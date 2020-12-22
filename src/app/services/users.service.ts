import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }
  getAllBaskets(){
    return this.http.get('http://localhost:3000/order');
  }
  getBasket(id: number){
    return this.http.get('http://localhost:3000/order/' + id);
  }
}
