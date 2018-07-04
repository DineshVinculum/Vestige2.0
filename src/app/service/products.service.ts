import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Product } from "../product.model";
import { Products } from "../product";
import { HealthCare } from "../models/healthcare";

import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { CachcingServiceBase } from "./caching.service";
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { HealthFood } from "../models/healthfood";
let count = 0;

@Injectable()
export class ProductsDataService extends CachcingServiceBase {
  private products: Observable<Products[]>;
  private healthcare: Observable<HealthCare[]>;
  private healthfood: Observable<HealthFood[]>;

  public constructor(private http: Http) {
    super();
  }

  public all(): Observable<Products[]> {
    return this.cache<Products[]>(() => this.products,
                                 (val: Observable<Products[]>) => this.products = val,
                                 () => this.http
                                           .get("./assets/products.json")
                                           .map((response) => response.json()
                                                                      .map((item) => {
                                                                        let model = new Products();
                                                                        model.updateFrom(item);
                                                                        return model;
                                                                      })));

  }


  public allHealthCare(): Observable<HealthCare[]> {
    return this.cache<HealthCare[]>(() => this.healthcare,
                                 (val: Observable<HealthCare[]>) => this.healthcare = val,
                                 () => this.http
                                           .get("./assets/productslist.json")
                                          //.get('http://localhost:3000/login')
                                        
                                           .map((response) => response.json()
                                                                      .map((item) => {
                                                                        let model = new HealthCare();
                                                                        model.updateFrom(item);
                                                                        return model;
                                                                      })));

  }

  public allHealthFoods(): Observable<HealthFood[]> {
    return this.cache<HealthFood[]>(() => this.healthfood,
                                 (val: Observable<HealthFood[]>) => this.healthfood = val,
                                 () => this.http
                                           .get("./assets/healthfoods.json")
                                          //.get('http://localhost:3000/login')
                                        
                                           .map((response) => response.json()
                                                                      .map((item) => {
                                                                        let model = new HealthFood();
                                                                        model.updateFrom(item);
                                                                        return model;
                                                                      })));

  }
}
