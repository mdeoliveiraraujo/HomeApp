import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShoppingList } from './data/object-model/shopping-list';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor(private http: HttpClient) { }

  /**
   * saveShoppingList
   */
  public saveShoppingList(shoppingList: ShoppingList) {
    console.log('activated service')
    this.http.post('http://localhost:3000','s')
  }
}
