import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Product } from "../product.model";
import { Products } from "../product";

import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { CachcingServiceBase } from "./caching.service";

let count = 0;

@Injectable()
export class ProductsDataService extends CachcingServiceBase {
  private products: Observable<Products[]>;

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
}
