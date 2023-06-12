import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ShoppingList } from './data/object-model/shopping-list';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor(private http: HttpClient) { }

  /**
   * saveShoppingList
   */
  public async saveShoppingList(shoppingList: ShoppingList) {
    console.log('activated service')
    const resp = await lastValueFrom(this.http.get('http://localhost:3000'));
  }
}
