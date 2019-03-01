import { Component, OnInit, Input } from '@angular/core';
import { Item } from './item';
import { ItemService } from '../../services/item.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

declare var $: any; // Jquery import

@Component({
  selector: 'app-items',
  template: `
  <div *ngIf="selectedItem">
    <h2 class="subtitle">Editing {{selectedItem.name | uppercase}}</h2>
    
    <div class="columns">
      <label class="column" *ngFor="let attr of selectedItem | keyvalue">
        {{ attr.key | titlecase }}
        <input class="input" [(ngModel)]="attr.value" placeholder="Item Name"/>
      </label>
    </div>

    <button class="button" (click)="goBack()">Cancel</button>
    <button class="button" (click)="save()">Save</button>
  </div>  

  <table class="table is-hoverable is-fullwidth">
    <thead>
      <tr>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let item of items">
      <td *ngFor="let attr of item | keyvalue" (click)="onSelect(item.id)">{{ attr.value }}</td>
      </tr>
    </tbody>
  </table>

  <button class="button" (click)="showAdd = !showAdd">Toggle New Item Form</button>
  <div *ngIf="showAdd">
    <label class="label">Item Name:
      <input class="input" #itemName />
    </label>
    <!-- (click) passes input value to add() and then clears the input -->
    <button class="button" (click)="add(itemName.value); itemName.value=''">
      Add
    </button>
  </div>

 
  <!-- <app-messages></app-messages> -->
  `,
  styleUrls: ['./items.component.scss']
})

export class ItemsComponent implements OnInit {

  items: Item[];
  @Input() selectedItem: Item;

  constructor(
    private route: ActivatedRoute,
    private _itemService: ItemService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getItems();
  }

  onSelect(id: number): void {
    this._itemService.getItem(id)
      .subscribe(item => this.selectedItem = item);
  }

  getItems(): void {
    this._itemService.getItems()
      .subscribe(items => this.items = items);
  }

  getItem(id: number): void {
    this._itemService.getItem(id)
      .subscribe(item => this.selectedItem = item);
  }

  add(newItem: Item): void {
    if (!name) { return; }
    this._itemService.addItem(newItem as Item)
      .subscribe(item => {
        this.items.push(item);
      });
  }

  save(): void {
    this._itemService.updateItem(this.selectedItem)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.selectedItem = null;
  }

  delete(item: Item): void {
    this.items = this.items.filter(h => h !== item);
    this._itemService.deleteItem(item).subscribe();
  }

}
