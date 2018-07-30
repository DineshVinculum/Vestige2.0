import { Injectable } from "@angular/core";
import {Http} from "@angular/http";
import {HttpClient ,HttpResponse,HttpHeaders} from "@angular/common/http";
import { Product } from "../product.model";
import { Products } from "../product";
import {Items } from "../item";
import {catchError} from "rxjs/operators";


import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { CachcingServiceBase } from "./caching.service";
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { UrlHandlingStrategy } from "@angular/router";
let count = 0;

@Injectable()
export class ItemMasterService extends CachcingServiceBase {
  private items: Observable<Items[]>;
  url = "http://localhost:3000/items";

  public constructor(private http: Http) {
    super();
  }
 
  public add(agert ) {

    return  this.http.post(this.url, agert).map((response)=>response.json());
   // this.catch((res: Response) => this.handleError(res));
  // catchError(this.handleError);
  }
}