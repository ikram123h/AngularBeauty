import { Component } from '@angular/core';
import {ParfumModel} from "../moduls/parfum.model";
import {ParfumService} from "../services/parfum.service";

@Component({
  selector: 'app-add-parfum',
  templateUrl: './add-parfum.component.html',
  styleUrl: './add-parfum.component.css'
})
export class AddParfumComponent {
  newParfum = new ParfumModel();
  constructor(private parfumService : ParfumService) {
  }

  addParfum() {
    this.parfumService.addParfum(this.newParfum,1).subscribe({
      next:(resp)=>{
        console.log(resp)
      }
    });
  }
}
