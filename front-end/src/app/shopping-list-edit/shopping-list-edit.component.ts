import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit{

  public listName: string = '';
  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
      this.listName = 'List #1';
  }

  public navigateToShoppingLists() {
    this.router.navigate(['shopping-lists']);
  }

  public navigateHome() {
    this.router.navigate(['home']);
  }

  /**
   * logThis
   */
  public logThis(something: any) {
    console.log('ha', something);
  }
}
