import { Component } from '@angular/core';

@Component({
  selector: 'app-spoiler-item',
  templateUrl: './spoiler-item.component.html',
  styleUrls: ['./spoiler-item.component.css'],
  inputs: ['header', 'isVisible', 'text']
})
export class SpoilerItemComponent {

  header!: string;
  isVisible: boolean = false;
  text!: string;

  showHide() {
    this.isVisible = !this.isVisible
  }

}
