import { NgModule } from '@angular/core';
import {TourCreateComponent} from "./tour/tour-create/tour-create.component";
import {TourEditComponent} from "./tour/tour-edit/tour-edit.component";
import {TourDeleteComponent} from "./tour/tour-delete/tour-delete.component";
import {TourListComponent} from "./tour/tour-list/tour-list.component";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [{
  path: 'tours/list',
  component: TourListComponent
},
  {
    path: 'tours/create',
    component: TourCreateComponent
  },
  {
    path: 'tours/edit/:id',
    component: TourEditComponent
  },
  {
    path: 'tours/delete/:id',
    component: TourDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
