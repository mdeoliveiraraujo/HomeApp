import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { ShoppingList } from './data/object-model/shopping-list';
import { ActivatedRoute, Router } from '@angular/router';
import { list1 } from './data/mock/shopping-list-examples';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  /**
   * saveShoppingList
   */
  public async saveShoppingList(shoppingList: ShoppingList) {
    console.log('activated service');
    const resp = await lastValueFrom(this.http.get('http://localhost:3000'));
  }

  public edit(shoppingListId: number) {
    this.router.navigate(['shopping-lists', 'edit', shoppingListId], {
      relativeTo: this.activatedRoute,
    });
  }

  public delete(shoppingListId: number) {
    this.router.navigate(['/edit']);
  }

  public retrieveshoppingList(shoppingListId: number): ShoppingList {
    return list1;
  }
}
