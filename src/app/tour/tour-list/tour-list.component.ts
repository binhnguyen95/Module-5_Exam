import {Component, OnInit} from '@angular/core';
import {Tour} from "../../model/tour";
import {TourService} from "../../service/tour.service";

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.css']
})
export class TourListComponent implements OnInit {
  // @ts-ignore
  tours: Tour[] ;

  constructor(private tourService: TourService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.tourService.getAll().subscribe((result: any) => {
      this.tours = result;
      console.log(result);
    }, (error: any) => {
      console.log(error);
    })
  }

  delete(id: any) {
    if (confirm('Are you sure you want to delete?')) {
      this.tourService.delete(id).subscribe(() => {
        alert("Ok");
        this.getAll()
      }, e => {
        console.log(e);
      });
    }
  }
}
