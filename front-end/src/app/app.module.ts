import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShoppingListPageComponent } from './shopping-list-page/shopping-list-page.component';
import { ShoppingListTopBarComponent } from './shopping-list-top-bar/shopping-list-top-bar.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListRowComponent } from './shopping-list-row/shopping-list-row.component';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShoppingListPageComponent,
    ShoppingListTopBarComponent,
    ShoppingListComponent,
    ShoppingListRowComponent,
    ShoppingListEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzIconModule,
    NzInputModule,
    FontAwesomeModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
