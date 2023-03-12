import { Component } from '@angular/core';

@Component({
  selector: 'app-block-item',
  templateUrl: './block-item.component.html',
  styleUrls: ['./block-item.component.css']
})
export class BlockItemComponent {

  isVisible: boolean = true;

  show() {
    this.isVisible = !this.isVisible
  }

}
