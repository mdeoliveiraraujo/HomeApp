import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import { ShoppingListsComponent } from './shopping-list/shopping-lists.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'shopping-lists',
        component: ShoppingListsComponent,
      },
          {
            path: 'new-list',
            component: ShoppingListEditComponent
          },
      { path: '**', redirectTo: 'home' }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
