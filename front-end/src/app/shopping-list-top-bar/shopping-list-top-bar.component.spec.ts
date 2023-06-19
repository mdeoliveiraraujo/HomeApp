import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListTopBarComponent } from './shopping-list-top-bar.component';

describe('ShoppingListTopBarComponent', () => {
  let component: ShoppingListTopBarComponent;
  let fixture: ComponentFixture<ShoppingListTopBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingListTopBarComponent]
    });
    fixture = TestBed.createComponent(ShoppingListTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
