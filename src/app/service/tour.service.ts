import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tour} from "../model/tour";

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})


export class TourService {

  constructor(private httpClient: HttpClient ) { }
  // @ts-ignore
  getAll():Observable<Tuor[]>{
    // @ts-ignore
    return this.httpClient.get<Tuor[]>(API_URL)
  }
  saveTour(tour:Tour):Observable<Tour>{
    return this.httpClient.post<Tour>(API_URL, tour);
  }

  findById(id: number):Observable<Tour>{
    return this.httpClient.get<Tour>(API_URL+`/${id}`);
  }

  editTour(id: number | undefined, tour: Tour): Observable<Tour>{
    return this.httpClient.put<Tour>(API_URL+`/${id}`,tour);
  }
  delete(id:any): Observable<Tour>{
    return this.httpClient.delete<Tour>(API_URL+`/${id}`);
  }
}
