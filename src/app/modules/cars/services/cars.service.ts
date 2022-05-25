import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

import { urls } from 'src/app/constants';
import { ICar } from 'src/app/models';


@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<ICar[]>{
    return this.http.get<ICar[]>(urls.cars);
  }

  getById(id: number): Observable<ICar>{
    return this.http.get<ICar>(`${urls.cars}/${id}`);
  }

  create(car: ICar): Observable<ICar>{
    return this.http.post<ICar>(urls.cars,car);
  }

  update(car: ICar, id: number):Observable<ICar>{
    return this.http.patch<ICar>(`${urls.cars}/${id}`,car);
  }

  deleteById(id: number): void{
    this.http.delete(`${urls.cars}/${id}`);
  }
}
