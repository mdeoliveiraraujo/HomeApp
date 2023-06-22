import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ShoppingList } from './data/object-model/shopping-list';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor(private http: HttpClient, private router: Router) { }

  /**
   * saveShoppingList
   */
  public async saveShoppingList(shoppingList: ShoppingList) {
    console.log('activated service')
    const resp = await lastValueFrom(this.http.get('http://localhost:3000'));
  }

  public edit(shoppingListId: number) {
    this.router.navigate(['/edit']);
  }

  public delete(shoppingListId: number) {
    this.router.navigate(['/edit']);
  }
}
