import { Component } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  inputs: ['firstName', 'lastName', 'age', 'userFullName']
})
export class UserDetailsComponent {

  firstName!: string;
  lastName!: string;
  age!: number;

  get userFullName(): string {
    return `${this.firstName} ${this.lastName}`
  }

  set userFullName(value: string) {
    this.firstName = value.split(' ')[0]
    this.lastName = value.split(' ')[1]
  }


}
