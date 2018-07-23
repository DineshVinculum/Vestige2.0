import { Injectable } from '@angular/core';
import { DataService } from '../shared/service.helper';
import {Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BaseService {
  constructor(private requestHelperService: DataService) {

   }
  search(url: any, data: any) {
      console.log('from base service' + url);
      console.log('from base service' + JSON.stringify(data));
      const headers = new Headers({});
      headers.append('Content-Type', 'application/json');
      //return this.requestHelperService.requestPost(url, data, headers).map(this.sendDataToComponent).catch(this.sendErrorToCompnent);
  }

  searchValue(url: any) {
    console.log('from base service' + url);
    const headers = new Headers({});
    headers.append('Content-Type', 'application/json');
    //return this.requestHelperService.requestGet(url, headers).map(this.sendDataToComponent).catch(this.sendErrorToCompnent);
}

  create(url: any, data: any) {
    console.log('from base service' + url);
    console.log('from base service' + data);
    const headers = new Headers({});
    headers.append('Content-Type', 'application/json');
    //return this.requestHelperService.requestPostParam(url, data, headers).map(this.sendDataToComponent).catch(this.sendErrorToCompnent);
  }


}
