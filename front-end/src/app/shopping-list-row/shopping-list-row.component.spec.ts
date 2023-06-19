import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListRowComponent } from './shopping-list-row.component';

describe('ShoppingListRowComponent', () => {
  let component: ShoppingListRowComponent;
  let fixture: ComponentFixture<ShoppingListRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingListRowComponent]
    });
    fixture = TestBed.createComponent(ShoppingListRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
