import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from '../components/items/item';

import { MessageService } from './message.service';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemsUrl = 'api/items';
  private itemUrl: string;

  constructor( private http: HttpClient, private messageService: MessageService) { }

  private log(message: string) {
    this.messageService.add(`ItemService: ${message}`);
  }

  /** CREATE: add a new item to the server */
  addItem (item: Item): Observable<Item> {
    return this.http.post<Item>(this.itemsUrl, item, httpOptions).pipe(
      tap((newItem: Item) => console.log(`added item w/ id=${newItem.id}`)),
      catchError(this.handleError<Item>('addItem'))
    );
  }


  /** READ: return items from ItemService */
  getItems(): Observable<Item[]> {
    // this.messageService.add('ItemService: fetched items');
    return this.http.get<Item[]>(this.itemsUrl)
      .pipe(
        tap(_ => console.log('fetched items')),
        catchError(this.handleError('getItems', []))
      );
  }
  /** READ: return items from ItemService */
  getItem(id: number): Observable<Item> {
    const url = `${this.itemsUrl}/${id}`;
    // this.messageService.add('ItemService: getting item...');
    return this.http.get<Item>(url).pipe(
      tap(_ => console.log(`fetched item id=${id}`)),
      catchError(this.handleError<Item>(`getItem id=${id}`))
    );
  }

  /** UPDATE: update the item on the server */
  updateItem (item: Item): Observable<any> {
    this.itemUrl = 'api/items/'+item.id
    return this.http.put(this.itemUrl, item, httpOptions)
      .pipe(
        tap(_ => console.log(`updated item id=${item.id}`)),
        catchError(this.handleError<any>('updateItem'))
      );
  }

  /** DESTROY: delete the item from the server */
  deleteItem (item: Item | number): Observable<Item> {
    const id = typeof item === 'number' ? item : item.id;
    const url = `${this.itemsUrl}/${id}`;

    return this.http.delete<Item>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted item id=${id}`)),
      catchError(this.handleError<Item>('deleteItem'))
    );
  }

  /* GET items whose name contains search term */
  searchItems(term: string): Observable<Item[]> {
    if (!term.trim()) {
      // if not search term, return empty item array.
      return of([]);
    }
    return this.http.get<Item[]>(`${this.itemsUrl}/?name=${term}`).pipe(
      tap(_ => console.log(`found items matching "${term}"`)),
      catchError(this.handleError<Item[]>('searchItems', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result    - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    
      console.error(error); 
    
      console.log(`${operation} failed: ${error.message}`);
    
      return of(result as T);
    };
  }

}
