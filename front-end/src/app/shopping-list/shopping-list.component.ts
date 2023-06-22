import { Component, Input, OnInit } from '@angular/core';
import { ShoppingList } from '../data/object-model/shopping-list';
import { ShoppingListService } from '../shopping-list.service';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
    @Input('shoppingLists') shoppingLists: ShoppingList[] = [];

    constructor(private shoppingListService: ShoppingListService) {}

    ngOnInit(): void {
        console.log('shoppingLists', this.shoppingLists)
    }

    public processAction(evt: { shoppingListId: number, action: string }) {
        switch (evt.action) {
            case 'edit':
                console.log('eaui')
                this.shoppingListService.edit(evt.shoppingListId);
                break;
            case 'delete':
                this.shoppingListService.delete(evt.shoppingListId);
                break;
            default:
                break;
        }
    }
}
