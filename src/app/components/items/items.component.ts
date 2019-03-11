import { Component, OnInit, Input } from '@angular/core';
import { Item } from './item';
import { ItemService } from '../../services/item.service';
import { Observable } from 'rxjs';

declare var $: any; // Jquery import

@Component({
  selector: 'app-items',
  template: `
  <div *ngIf="selectedItem">
    <h2 class="subtitle">Editing {{selectedItem.name | uppercase}}</h2>
    
    <div class="columns">
      <label class="column" *ngFor="let attr of selectedItem | keyvalue">
        {{ attr.key | titlecase }}
        <input class="input " [(ngModel)]="attr.value" placeholder="Item Name"/>
      </label>
      <button class="button is-danger column is-1"
      (click)="delete(selectedItem)">Delete</button>
     
    </div>

 
    <button class="button" (click)="goBack()">Cancel</button>
    <button class="button" (click)="save()">Save</button>
  </div>  

  <table class="table is-hoverable is-fullwidth">
    <thead>
      <tr>
        <th>Item Category</th><th>Item Name</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let item of items$ | async">
        <td (click)="onSelect(item.id)">{{ item.category | titlecase}}</td>
        <td (click)="onSelect(item.id)">{{ item.name | titlecase}}</td>
      </tr>
    </tbody>
  </table>

  <button class="button is-pulled-right" (click)="showAdd = !showAdd">Toggle New Item Form</button>
  <div *ngIf="showAdd">
    <label class="label">Item Category:
      <input class="input" [(ngModel)]="newItem.category" placeholder="Item Category"/>
    </label>
     <label class="label">Item Name:
      <input class="input" [(ngModel)]="newItem.name" placeholder="Item Name"/>
    </label>
    <label class="label">Item Value:
      <input class="input" [(ngModel)]="newItem.value" placeholder="Item Value"/>
    </label>
    <button class="button" (click)="add(newItem);">
      Add
    </button>
  </div>

 
  <app-messages></app-messages>
  `,
  styleUrls: ['./items.component.scss']
})

export class ItemsComponent implements OnInit {

  items$: Observable<Item[]>;
  newItem: Item;
  @Input() selectedItem: Item;

  constructor(
    private _itemService: ItemService,
  ) { }

  ngOnInit() {
    this.items$ = this._itemService.getItems();
  }

  onSelect(id: number): void {
    this._itemService.getItem(id)
      .subscribe(item => this.selectedItem = item);
  }

  getItem(id: number): void {
    this._itemService.getItem(id)
      .subscribe(item => this.selectedItem = item);
  }

  add(newItem: Item): void {
    if (!name) { return; }
    this._itemService.addItem(newItem as Item)
  }

  save(): void {
    this._itemService.updateItem(this.selectedItem)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.selectedItem = null;
  }

  delete(item: Item): void {
    this._itemService.deleteItem(item)
      .subscribe(() => this.goBack());
  }

}
