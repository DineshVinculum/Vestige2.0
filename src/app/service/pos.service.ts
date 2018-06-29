import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Products } from '../product';
//import { PRODUCTS } from '../mock-pos';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PosService {

  private productsUrl = 'api/heroes';  // URL to web api

  constructor(
    private http: HttpClient) { }

  /** GET products from the server */
  getProducts (): Observable<Products[]> {
    return this.http.get<Products[]>(this.productsUrl)
      .pipe(
      );
  }

}
