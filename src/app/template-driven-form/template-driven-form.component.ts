import { Component } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent {

  userModal = new User();

  constructor() { }

  // tslint:disable-next-line:typedef
  onSubmit() {
    alert('Registration  succesfully!!!\n Check the values in browser console.');
    console.table(this.userModal);
  }
}
