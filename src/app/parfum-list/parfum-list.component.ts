import {Component, OnInit} from '@angular/core';
import {ParfumModel} from "../moduls/parfum.model";
import {ParfumService} from "../services/parfum.service";

@Component({
  selector: 'app-parfum-list',
  templateUrl: './parfum-list.component.html',
  styleUrl: './parfum-list.component.css'
})
export class ParfumListComponent implements OnInit{
  parfums! : ParfumModel[];
  constructor( private parfumService : ParfumService) {

  }

  ngOnInit(): void {
    this.getAllParfums()
  }

  getAllParfums(){
    this.parfumService.parfumsList().subscribe({
      next:(resp)=>{
        this.parfums=resp;
      }
    })
  }


  delete(id: number): void{
    this.parfumService.deleteParfum(id).subscribe({
      next:(resp)=>{
        this.getAllParfums()
        console.log("succsegdjhd")
      }
    });


  }


}
