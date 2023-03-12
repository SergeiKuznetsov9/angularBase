import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {
  firstInputValue: string = ''

  onInput(e: any) {
    this.firstInputValue = e.target.value
  }

  showFirstInputValue() {
    console.log(this.firstInputValue)
  }

  changeFirstInputValue() {
    this.firstInputValue = 'newValue'
  }

}
