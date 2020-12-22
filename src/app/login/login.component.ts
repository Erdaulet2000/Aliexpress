import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm = new FormGroup({
    useremail: new FormControl(),
    password: new FormControl()
  });

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.userForm.value);
  }
}
