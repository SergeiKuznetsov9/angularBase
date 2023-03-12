import { Component } from '@angular/core';

@Component({
  selector: 'app-template-ref',
  templateUrl: './template-ref.component.html',
  styleUrls: ['./template-ref.component.css'],
})
export class TemplateRefComponent {
  showAllInf(someData: any) {
    console.dir(someData);
  }
}
