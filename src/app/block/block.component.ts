import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { BlockItemComponent } from './block-item/block-item.component';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {

// viewChild и viewChildren можно использовать только в том случае, если мы этих
// чилдренов получаем в шаблоне напрямую





/*   @ViewChild(BlockItemComponent)
  blockItem!: BlockItemComponent */
  @ViewChild('selected')
  selectedBlock!: BlockItemComponent

  @ViewChildren(BlockItemComponent)
  blockItems!: BlockItemComponent[]

/*   showBlock() {
    console.log(this.blockItem)
    this.blockItem.show()
  } */

  showBlock() {
    this.blockItems.forEach( block => block.show())
    console.log(this.blockItems)
/*     this.blockItems.show() */
  }

  showSelectedBlock() {
    this.selectedBlock.show()   
  }

  ngOnInit() {
    /* не сработает, т.к. после инициализации компонента его childrens еще не успели инициализироваться */
    /* console.log(this.blockItem) */
  }

}
