import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Http } from '@angular/http'
//import { Distributor } from '../distributor.model';
//import { CachcingServiceBase } from './caching.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DistributorService {

  private distributorURL = '';  // URL to web api

  constructor(private http: Http) { 
    //super();
  }

  /* GET new distributor id from the server */
  getNextDistributorId() : Observable<any> {
     return this.http.get("http://localhost:3000/distributors").map((response ) => 
                                      
                                        response.json().map((distributorData)=> distributorData.distributorId));
                                                       
  }

  /* valiadate new distributor id, if input on the form, from the server */
  validateDistributorId(disId : string) : boolean {
    return true;
  }

  /* get the name of upline from input upine id */
  getUplineName(uplineId:string) : Observable<any> {
          return this.http.get(`http://localhost:3000/distributors/?uplineId=${uplineId}`)
                          .map((response) => response.json()
                          .map((distributorData)=> distributorData.uplineName));
  }

  getDistributorData() : Observable<any> {
    return this.http.get("http://localhost:3000/distributors").map((response ) => response.json());
                                     //.map((distributorData)=> distributorData.distributorId));
  }

  postDistributor(distributorData):Observable<any>{
    console.log(distributorData);
    return this.http.post(`http://localhost:3000/distributors`, distributorData)
                    .map((response) => response.json());
  }


  

}
