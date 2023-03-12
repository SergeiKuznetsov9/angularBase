import { Component } from '@angular/core';

@Component({
  selector: 'app-timers',
  templateUrl: './timers.component.html',
  styleUrls: ['./timers.component.css'],
})
export class TimersComponent {
  valueArray: number[] = []

  handleTick(pos: number, eventValue: number) {
    this.valueArray[pos] = eventValue;
    console.log(this.valueArray);
  }
}
 