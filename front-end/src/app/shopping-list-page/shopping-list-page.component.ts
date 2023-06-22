import { Component, OnInit } from '@angular/core';
import { ShoppingItem } from '../data/interfaces/shopping-list-item';
import { ShoppingList } from '../data/object-model/shopping-list';
import { list1, list2 } from '../data/mock/shopping-list-examples';

@Component({
  selector: 'app-shopping-list-page',
  templateUrl: './shopping-list-page.component.html',
  styleUrls: ['./shopping-list-page.component.scss'],
})
export class ShoppingListPageComponent implements OnInit{
    public shoppingLists: ShoppingList[] = [];

    ngOnInit(): void {
        this.shoppingLists.push(list1);
        this.shoppingLists.push(list2);

        console.log('Listas',this.shoppingLists)
    }
}
