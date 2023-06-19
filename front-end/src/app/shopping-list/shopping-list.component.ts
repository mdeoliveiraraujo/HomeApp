import { Component, Input, OnInit } from '@angular/core';
import { ShoppingList } from '../data/object-model/shopping-list';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit{
    @Input('shoppingLists') shoppingLists: ShoppingList[] = [];

    ngOnInit(): void {
        console.log('shoppingLists', this.shoppingLists)
    }
}
