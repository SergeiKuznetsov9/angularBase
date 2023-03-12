import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class-dir',
  templateUrl: './ng-class-dir.component.html',
  styleUrls: ['./ng-class-dir.component.css']
})
export class NgClassDirComponent {

  settings: any = {
    'greenyellowColor': true,
    'blackBackground': true
  }
}
