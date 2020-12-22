import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from '../services/users.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: []
})
export class BasketComponent implements OnInit {
  basket: any;

  constructor(private route: ActivatedRoute, private userService: UsersService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.userService.getBasket(id).subscribe(b => {
      console.log(b);
      this.basket = b;
    });
  }
}
