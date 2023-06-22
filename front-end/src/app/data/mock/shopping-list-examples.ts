import { ShoppingItem } from "../interfaces/shopping-list-item";
import { ShoppingList } from "../object-model/shopping-list";

const item1: ShoppingItem = {
    name: 'Tomato',
    quantity: 10,
    check: false
};

const item2: ShoppingItem = {
    name: 'Alfaco',
    quantity: 7,
    check: false
};

const item3: ShoppingItem = {
    name: 'Beterrabo',
    quantity: 5,
    check: false
};

const item4: ShoppingItem = {
    name: 'Batato',
    quantity: '1kg',
    check: false
};

export const list1: ShoppingList = new ShoppingList();

list1.setTitle('Mais nova lista');
list1.addNewItem(item1);
list1.addNewItem(item3);
list1.setId(1);

export const list2: ShoppingList = new ShoppingList();

list2.setTitle('Mais velha lista');
list2.addNewItem(item2);
list2.addNewItem(item4);
list2.setId(2);