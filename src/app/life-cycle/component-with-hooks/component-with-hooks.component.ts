import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-component-with-hooks',
  templateUrl: './component-with-hooks.component.html',
  styleUrls: ['./component-with-hooks.component.css'],
  inputs: ['counter', 'secondCounter'],
})
export class ComponentWithHooksComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  counter!: number;
  secondCounter!: number;

  // Возникает многократно.
  // Применяются в т.ч. к диррективам
  // Выполняется самым первым при начальной установке свойств, которые связаны
  // механизмом привязки, а также при любой их переустановке или изменении их значений.
  // Данный метод в качестве параметра принимает необзятаельный аргумент - объект
  // класса SimpleChanges, который содержит предыдущие и текущие свойства
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', this.counter);
    console.log('SimpleChanges', changes);
  }

  // Возникает однократно.
  // Применяются в т.ч. к диррективам
  // Этот хук срабатывает при инициализации компонента
  ngOnInit() {
    console.log('ngOnInit', this.counter);
  }

  // Возникает многократно.
  // Применяются в т.ч. к диррективам
  // Вызывается при каждой проверке изменений свойство компонента, т.е. когда Angular делает changeDetection
  ngDoCheck() {
    console.log('ngDoCheck')

  }

  // Возникает однократно.
  // Применяются только к шаблонным-компонентам
  // Произошла инициализация элементов текущего компонента, выводимая через ng-content
  ngAfterContentInit() {
    console.log('ngAfterContentInit')

  }

  // Возникает многократно.
  // Применяются только к шаблонным-компонентам
  // вызывается когда закончился цикл проверки содержимого элементов, которые попали в текущий через ng-content
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked')

  }

  // Возникает однократно.
  // Применяются только к шаблонным-компонентам
  // Проверяет, что в темплейте закончена вся инициализация
  ngAfterViewInit() {
    console.log('ngAfterViewInit')

  }

  // Возникает многократно.
  // Применяются только к шаблонным-компонентам
  // вызывается при изменении в интерфейсе, связанные с дочерними компонентами
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked')
  }

  // Возникает однократно.
  // Применяются в т.ч. к диррективам
  // вызывается при уничтожении компонента
  ngOnDestroy() {}
}
