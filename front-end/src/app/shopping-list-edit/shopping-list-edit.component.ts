import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShoppingList } from '../data/object-model/shopping-list';
import { tap } from 'rxjs';
import { ShoppingListService } from '../shopping-list.service';

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html',
    styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit {
    public list: ShoppingList = new ShoppingList();
    public listForm!: FormGroup;

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private shoppingListService: ShoppingListService
    ) { }

    ngOnInit(): void {
        this.list.setTitle('Ali');
        this.list.addNewItem({
            name: 'Alface',
            description: 'Um vegetal gotoso',
            check: false
        })
        this.setupForm();

        this.listForm.valueChanges.pipe(
            tap((someChange) => {
                console.log('someChange')
            })
        ).subscribe(() => {
            console.log('got heeere')
            this.shoppingListService.saveShoppingList(this.list);
        });

        const itemsFormaaa = this.itemsFormArray;
        console.log('itemsFormmm',itemsFormaaa)
      }

    public navigateToShoppingLists() {
        this.router.navigate(['shopping-lists']);
    }

    public navigateHome() {
        this.router.navigate(['home']);
    }

    public logThis(something: any) {
        console.log('ha', something);
    }

    public setupForm() {
        console.log('a lista', this.list)
        this.listForm = this.fb.group({
            title: [this.list.getTitle(), [Validators.required]],
            description: [this.list.getDescription()],
            items: this.fb.array(this.list.getItems().map((item) => {
                return this.fb.group({
                    name: [item.name],
                    description: [item.description],
                    quantity: [item.quantity],
                    status: [item.check]
                })
            }))
        })

        console.log('form', this.listForm)
    }

    get itemsFormArray(): FormArray {
        return <FormArray>this.listForm.get('items');
    }
}
