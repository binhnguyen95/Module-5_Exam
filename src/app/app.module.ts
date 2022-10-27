import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TourCreateComponent } from './tour/tour-create/tour-create.component';
import { TourDeleteComponent } from './tour/tour-delete/tour-delete.component';
import { TourEditComponent } from './tour/tour-edit/tour-edit.component';
import {AppRoutingModule} from "./app-routing.module";
import {TourListComponent} from "./tour/tour-list/tour-list.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TourListComponent,
    TourCreateComponent,
    TourDeleteComponent,
    TourEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
