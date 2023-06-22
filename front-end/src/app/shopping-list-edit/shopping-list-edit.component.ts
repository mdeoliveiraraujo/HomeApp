import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { ShoppingList } from '../data/object-model/shopping-list';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss'],
})
export class ShoppingListEditComponent implements OnInit{

    public id!: number;
    public shoppingList!: ShoppingList;

    constructor(private shoppingListService: ShoppingListService, private activatedRoute: ActivatedRoute) {}
    ngOnInit(): void {
        this.id = this.activatedRoute.snapshot.params['id'];
        this.shoppingList = this.shoppingListService.retrieveshoppingList(this.id);
    }
}
