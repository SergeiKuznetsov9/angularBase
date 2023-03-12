import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-timer-item',
  templateUrl: './timer-item.component.html',
  styleUrls: ['./timer-item.component.css'],
  inputs: ['timerInterval'],
  /* outputs: [] */
})
export class TimerItemComponent implements OnInit {
  @Output() tick = new EventEmitter<number>();
  currentTimerValue: number = 0;
  timerInterval: number = 1000;
  timerID: any = null;

  constructor() {}

  ngOnInit(): void {}

  timerStart() {
    if (this.timerID !== null) return;
    this.timerID = setInterval(() => {
      this.timerIncrement();
    }, this.timerInterval);
  }

  timerStop() {
    if (this.timerID === null) return
    clearInterval(this.timerID);
    this.timerID = null;
  }

  private timerIncrement() {
    this.tick.emit(++this.currentTimerValue)
  }






}
