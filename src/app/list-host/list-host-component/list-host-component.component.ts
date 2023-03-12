import { Component, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';

@Component({
  selector: 'app-list-host-component',
  templateUrl: './list-host-component.component.html',
  styleUrls: ['./list-host-component.component.css']
})
export class ListHostComponentComponent {
  // в связи с тем, что дочерние компоненты в этом компоненте получены не напрямую,
  // а через ng-content, то использовать viewChildren для получения доступа к элементам уже нельзя,
  // нужно использовать другой декоратор:

  @ContentChild(ListItemComponent)
  item!: ListItemComponent

  @ContentChild('selected')
  itemSelected!: ListItemComponent

  @ContentChildren(ListItemComponent)
  items!: QueryList<ListItemComponent>


  showChild() {
    console.log(this.item)
  }

  showSelectedChild() {
    console.log(this.itemSelected)
    this.itemSelected.increase(7)
    /* this.itemSelected */
  }


  showChildren() {
    console.log(this.items)

    this.items.forEach((element: ListItemComponent) => {
      console.log(element)
    });
  }

}
