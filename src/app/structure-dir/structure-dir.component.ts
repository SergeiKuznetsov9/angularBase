import { Component } from '@angular/core';

@Component({
  selector: 'app-structure-dir',
  templateUrl: './structure-dir.component.html',
  styleUrls: ['./structure-dir.component.css'],
})
export class StructureDirComponent {
  isShown: boolean = false;
  value: number = 2;

  dataFor: any = [
    {id: 1, name: 'John', secondName: 'Rembo'},
    {id: 2, name: 'Bob', secondName: 'Dilon'},
    {id: 3, name: 'Nick', secondName: 'Book'},
    {id: 4, name: 'Max', secondName: 'Payn'},
  ]
}
