import { Component, OnInit } from '@angular/core';
import {TourService} from "../../service/tour.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tour-create',
  templateUrl: './tour-create.component.html',
  styleUrls: ['./tour-create.component.css']
})
export class TourCreateComponent implements OnInit {

  tourForm: FormGroup = new FormGroup({
    id: new FormControl(),
    title: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });

  constructor(private tourService: TourService,
              private router: Router) { }

  submit() {
    const product = this.tourForm.value;

    this.tourService.saveTour(product).subscribe(() => {
      this.tourForm.reset();
      alert('Create success');
      this.router.navigate(['/tours/list']);
    }, e => {
      console.log(e);
    });
  }

  ngOnInit(): void {
  }
}
