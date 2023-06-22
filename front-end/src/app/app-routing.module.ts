import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShoppingListPageComponent } from './shopping-list-page/shopping-list-page.component';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';


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
        component: ShoppingListPageComponent,
        children: [
          {
            path: 'edit',
            component: ShoppingListEditComponent
          }
        ]
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
