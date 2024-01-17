import {Component, OnInit} from '@angular/core';
import {ParfumModel} from "../moduls/parfum.model";
import {ParfumService} from "../services/parfum.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-edit-parfum',
  templateUrl: './edit-parfum.component.html',
  styleUrl: './edit-parfum.component.css'
})
export class EditParfumComponent implements OnInit{
  currentParfum: ParfumModel = new ParfumModel();
  constructor(
    private parfumService : ParfumService,
    private activatedRoute : ActivatedRoute,
    private router : Router
  ) {}
  ngOnInit() {
    //console.log(this.activatedRoute.snapshot.params['id']);
    this.findParfum()
  }


  updateParfum() {
    this.parfumService.updateParfum(this.currentParfum).subscribe({
      next:(resp)=>{
        this.router.navigate(['Parfum-List']);
    }
    });


}
findParfum(){
  this.parfumService.findParfum(this.activatedRoute.snapshot.params['id']).subscribe({
    next:(resp)=>{
      this.currentParfum=resp
    }
  });
}
}
