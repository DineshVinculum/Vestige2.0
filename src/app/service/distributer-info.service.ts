import { Injectable } from '@angular/core';
import {Disinfo} from "../distributer-info";

import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { CachcingServiceBase } from "./caching.service";
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
let count = 0;

@Injectable()
export class DistributerInfoService extends CachcingServiceBase {

  private disinfo: Observable<Disinfo[]>;

  public constructor(private http: Http) {
    super();
  }

  public all(): Observable<Disinfo[]> {
    return this.cache<Disinfo[]>(() => this.disinfo,
                                 (val: Observable<Disinfo[]>) => this.disinfo = val,
                                 () => this.http
                                           .get("http://localhost:3000/disinfo")
                                           .map((response) => response.json()
                                                                      .map((disinfo) => {
                                                                        return disinfo;
                                                                      })));
    }

  }