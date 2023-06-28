import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { ShoppingList } from '../data/object-model/shopping-list';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html',
    styleUrls: ['./shopping-list-edit.component.scss'],
})
export class ShoppingListEditComponent implements OnInit {
    /**
     * id of the current shopping list
     */
    public id!: number;

    /**
     * shopping list that'll be manipulated in the component
     */
    public shoppingList!: ShoppingList;

    /**
     * shopping list form group to modify the current shopping list
     */
    public shoppingListForm!: FormGroup;

    constructor(
        private shoppingListService: ShoppingListService,
        private activatedRoute: ActivatedRoute,
        private fb: FormBuilder
    ) {}

    ngOnInit(): void {
        this.id = this.activatedRoute.snapshot.params['id'];
        this.shoppingList = this.shoppingListService.retrieveshoppingList(
            this.id
        );

        this.setupForm();
        console.log('this.shoppingListForm', this.shoppingListForm);
    }

    /**
     * set up method to create form that'll contain shopping list modifications
     */
    public setupForm() {
        this.shoppingListForm = this.fb.group({
            title: [this.shoppingList.getTitle(), [Validators.required]],
            items: this.fb.array(
                this.shoppingList.getItems().map((item) => {
                    return this.fb.group({
                        name: [item.name, [Validators.required]],
                        check: [item.check],
                        description: [item.description],
                        quantity: [item.quantity],
                    });
                })
            ),
        });
    }
}
