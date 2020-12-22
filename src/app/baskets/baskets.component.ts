import { Component, OnInit } from '@angular/core';
import {UsersService} from '../services/users.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-baskets',
  templateUrl: './baskets.component.html',
  styleUrls: ['./baskets.component.css']
})
export class BasketsComponent implements OnInit {

  constructor(private userService: UsersService, private activateRoute: ActivatedRoute) { }

  baskets: any;

  ngOnInit(): void {
    this.baskets = this.activateRoute.snapshot.data['data'];
  }
}

