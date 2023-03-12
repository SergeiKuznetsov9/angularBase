import { Component, OnInit } from '@angular/core';
import { COUNTRIES } from './countries.mock-data';
import { ICountry } from './country.interface';


// Компонент по своей сути является директивой с шаблоном
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  countriesList: ICountry[] = COUNTRIES
  choosenCountry!: ICountry;

  // Этот метод срабатывает при инициализации компонента
  ngOnInit(): void {
    console.log(this.  countriesList)
  }

  onSelect(country: ICountry): void {
    console.log(country)
    this.choosenCountry = country
  }

}
