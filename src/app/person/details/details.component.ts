import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  inputs: ['age', 'step']
})
export class DetailsComponent {

  @Input() name: string = 'Borodach';
  age: number | string = 26;
  step: number | string = 1;


  increase() {
    this.age  = Number(this.age) + Number(this.step) 
  }

  decrease() {
    this.age = Number(this.age) - Number(this.step)
  }

}
