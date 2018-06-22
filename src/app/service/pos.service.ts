import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Location } from '../mock/location';
import { PRODUCTS } from '../mock/mock-pos';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PosService {

  private productsUrl = 'api/heroes';  // URL to web api

  constructor(
    private http: HttpClient) { }

  /** GET products from the server */
  getProducts (): Observable<Location[]> {
    return this.http.get<Location[]>(this.productsUrl)
      .pipe(
      );
  }

}
