import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShoppingList } from '../data/object-model/shopping-list';

@Component({
    selector: 'app-shopping-list-row',
    templateUrl: './shopping-list-row.component.html',
    styleUrls: ['./shopping-list-row.component.scss'],
})
export class ShoppingListRowComponent implements OnInit {
    @Input('shoppingList') public shoppingList: ShoppingList = new ShoppingList;
    @Output('actionEmitter') public actionEmitter = new EventEmitter<{ shoppingListId: number, action: string }>();

    ngOnInit(): void {
        console.log('shoppingList', this.shoppingList)
    }

    public toParent(shoppingListId: number, action: string) {
        this.actionEmitter.emit({shoppingListId, action});
    }

}
