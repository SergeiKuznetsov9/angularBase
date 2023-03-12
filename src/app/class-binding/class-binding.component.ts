import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent {
  classList: string = 'root'


  addClass() {
    this.classList += ' additionClass'

    'additionClass'

  }

}
