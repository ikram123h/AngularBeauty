import { Injectable } from '@angular/core';
import {ParfumModel} from "../moduls/parfum.model";
import {HttpClient} from "@angular/common/http";
import {host} from "../Config";

@Injectable({
  providedIn: 'root'
})
export class ParfumService {
  parfums !: ParfumModel[];
  parfum! : ParfumModel;

  constructor(private http:HttpClient) {
  }
  parfumsList(){
    return this.http.get<ParfumModel[]>(`${host}/parfumsList`)

  }
  addParfum(newParfum : ParfumModel , idCategory : number){
    return this.http.post<ParfumModel>(`${host}/saveParfum?idcat=${idCategory}`,newParfum)
  }
  deleteParfum(id : number) {
    return this.http.get(`${host}/deleteParfum?id=${id}`)
  }
  findParfum(id : number){
    return this.http.get<ParfumModel>(`${host}/showParfum?id=${id}`)
  }

  updateParfum(parfum: ParfumModel){
    return this.http.post<ParfumModel>(`${host}/updateParfum`,parfum)
}


  sortParfums(){
    this.parfums.sort((a, b) => (a.idParfum! > b.idParfum! ? 1 : -1))
  }
}
