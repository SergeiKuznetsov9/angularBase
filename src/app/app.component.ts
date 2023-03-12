import { Component } from '@angular/core';

// декоратор компонента со своей аннотацией
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appStudy';
}
