import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddParfumComponent } from './add-parfum/add-parfum.component';
import { ParfumListComponent } from './parfum-list/parfum-list.component';
import {FormsModule} from "@angular/forms";
import { EditParfumComponent } from './edit-parfum/edit-parfum.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ProductsListComponent} from "./products-list/products-list.component";
import {AddProductComponent} from "./add-product/add-product.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {LoginComponent} from "./login/login.component";
import {ForbiddenComponent} from "./forbidden/forbidden.component";

@NgModule({
  declarations: [
    AppComponent,
    AddParfumComponent,
    ParfumListComponent,
    EditParfumComponent,
    AppComponent,
    ProductsListComponent,
    AddProductComponent,
    EditProductComponent,
    LoginComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
