import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { ItemService } from '../../services/item.service';
declare var $: any; // Jquery import

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})

export class ItemsComponent implements OnInit {
  /* TODO:
        1) Item Create, Modify, Save, Destroy model
          note: verify units against UNITS every change ^
  */
  items: Item[];
  selectedItem: Item;
  
  constructor(private _itemService: ItemService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this._itemService.getItems()
      .subscribe(items => this.items = items);
  }

  onSelect(item: Item): void {
    this.selectedItem = item;
  }

}
