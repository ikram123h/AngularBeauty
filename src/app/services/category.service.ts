import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductModel} from "../moduls/product.model";
import {CategoryModel} from "../moduls/Category.model";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiURL:string="http://localhost:8080/api";
  constructor(private http :HttpClient) { }

  categoryById(id:number){
    return this.http.get<CategoryModel>(this.apiURL+"/categories/"+id);
  }
}
