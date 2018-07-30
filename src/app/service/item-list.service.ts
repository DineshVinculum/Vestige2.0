import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Product } from "../product.model";
import { Products } from "../product";
import {Items } from "../item";

import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { CachcingServiceBase } from "./caching.service";
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
let count = 0;

@Injectable()
export class ItemListDataService extends CachcingServiceBase {
  private items: Observable<Items[]>;

  public constructor(private http: Http) {
    super();
  }

  public all(): Observable<Items[]> {
    return this.cache<Items[]>(() => this.items,
                                 (val: Observable<Items[]>) => this.items = val,
                                 () => this.http
                                           .get("http://localhost:3000/items")
                                           .map((response) => response.json()
                                                                      .map((item) => {
                                                                        
                                                                        return item;
                                                                      })));
    }

  }