import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Tour} from "../../model/tour";
import {TourService} from "../../service/tour.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-tour-edit',
  templateUrl: './tour-edit.component.html',
  styleUrls: ['./tour-edit.component.css']
})
export class TourEditComponent implements OnInit {

  sub:Subscription;

  tours: Tour = {
    id:0,
    title:"title",
    description: "Mo ta",
    price: 0
  };

  id: number | undefined;

  constructor(private tourService: TourService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.sub = this.activatedRoute.paramMap.subscribe( (paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getTour(this.id);
    })
  }

  getTour(id: number){
    this.tourService.findById(id).
    subscribe(product =>{
      this.tours = product;
    });
  }

  updateTour(){
  this.tourService.editTour(this.tours.id, this.tours).subscribe(()=>{
    alert('Success')
    this.router.navigate(['/tours/list']);
    });
  }

  ngOnInit(){
  }

}
