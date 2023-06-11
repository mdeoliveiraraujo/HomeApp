import { ShoppingItem } from "../interfaces/shopping-list-item";


export class ShoppingList {
    
    private title: string = '';
    private items: ShoppingItem[] = [];

    public getTitle(): string {
        return this.title;
    }

    public setTitle(newTitle: string) {
        this.title = newTitle;
    }

    public getItems(): ShoppingItem[] {
        return this.items;
    }

    public addNewItem(item: ShoppingItem) {
        this.items.push(item);
    }

    public deleteItem(item: ShoppingItem) {
        const idx: number = this.items.indexOf(item);
        this.items.splice(idx,1);
    }

    public changeItemName(item: ShoppingItem, newName: string) {
        const targetItem: any = this.items.find(item => item.name === targetItem.name);
        targetItem.name = newName;
    }

    public getDescription(): string {
        return this.title;
    }

    public setItemDescription(item: ShoppingItem, newDescription: string) {
        const targetItem: any = this.items.find(item => item.name === targetItem.name);
        targetItem.description = newDescription;
    }

    public setItemQuantity(item: ShoppingItem, newQuantity: number | string) {
        const targetItem: any = this.items.find(item => item.name === targetItem.name);
        targetItem.quantity = newQuantity;
    }

    public setItemStatus(item: ShoppingItem, newStatus: boolean) {
        const targetItem: any = this.items.find(item => item.name === targetItem.name);
        targetItem.check = newStatus;
    }
}