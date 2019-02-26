import { Injectable } from '@angular/core';
import { Item } from '../components/items/item';
import { ITEMS } from '../components/items/mock-data'; // To be replaced by server data
import { MessageService } from './message.service';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  // Method to return items from ItemService
  getItems(): Observable<Item[]> {
    this.messageService.add('ItemService: fetched items');
    return of(ITEMS);
  }

  constructor(private messageService: MessageService) { }
}
