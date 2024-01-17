import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ParfumListComponent} from "./parfum-list/parfum-list.component";
import {AddParfumComponent} from "./add-parfum/add-parfum.component";
import {EditParfumComponent} from "./edit-parfum/edit-parfum.component";
import {ForbiddenComponent} from "./forbidden/forbidden.component";
import {LoginComponent} from "./login/login.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {AddProductComponent} from "./add-product/add-product.component";
import {ProductsListComponent} from "./products-list/products-list.component";
import {productGuard} from "./product.guard";

const routes: Routes = [
  {path : "Parfum-List", component : ParfumListComponent},
  {path : "Add-Parfum", component : AddParfumComponent},
  {path : "Edit-Parfum/:id", component : EditParfumComponent},

  {path :"products-list", component:ProductsListComponent},
  {path :"add-product", component:AddProductComponent, canActivate: [productGuard]},
  {path :"edit-product/:id",component: EditProductComponent},
  {path :"login",component:LoginComponent},
  {path :"forbidden",component:ForbiddenComponent},
  {path :"", redirectTo :"login", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

