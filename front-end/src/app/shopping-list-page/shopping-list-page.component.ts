import { Component, OnInit } from '@angular/core';
import { ShoppingItem } from '../data/interfaces/shopping-list-item';
import { ShoppingList } from '../data/object-model/shopping-list';

@Component({
  selector: 'app-shopping-list-page',
  templateUrl: './shopping-list-page.component.html',
  styleUrls: ['./shopping-list-page.component.scss'],
})
export class ShoppingListPageComponent implements OnInit{
    public shoppingLists: ShoppingList[] = [];

    ngOnInit(): void {
        const item1: ShoppingItem = {
            name: 'Tomato',
            check: false
        };

        const item2: ShoppingItem = {
            name: 'Alfaco',
            check: false
        };

        const item3: ShoppingItem = {
            name: 'Beterrabo',
            check: false
        };

        const item4: ShoppingItem = {
            name: 'Batato',
            check: false
        };

        const list1: ShoppingList = new ShoppingList();

        list1.setTitle('Mais nova lista');
        list1.addNewItem(item1);
        list1.addNewItem(item3);

        const list2: ShoppingList = new ShoppingList();

        list2.setTitle('Mais velha lista');
        list2.addNewItem(item2);
        list2.addNewItem(item4);

        this.shoppingLists.push(list1);
        this.shoppingLists.push(list2);

        console.log('Listas',this.shoppingLists)
    }
}
