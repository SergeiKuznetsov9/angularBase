import { Component } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css'],
})
export class LifeCycleComponent {

  counter: number = 1;
  counter2: number = 3;

  increase() {
    this.counter++
  }

  increaseSecondCounter() {
    this.counter2++
  }

  decrease() {
    this.counter--
  }

  decreaseSecondCounter() {
    this.counter2++
  }


}
