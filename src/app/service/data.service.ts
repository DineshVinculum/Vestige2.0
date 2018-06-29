import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {
  private url: string = 'http://localhost:3000/';

  constructor(private http: Http) { }

  login(post): Observable<any> {

    console.log(post);
    // const getLoginUrl = this.url + 'get/login/' + post['username'] + '/' + post['password'];

    const getLoginUrl = this.url + 'db';

    // http://localhost:3000/db

    // http://localhost/restapiserver/api/get/login/DK/123

    return this.http
      .get(getLoginUrl, {})
      .map(
      res => {

      

        if (res.json().login.status == true) {
console.log(res.json().login.role[0]);
          //localStorage.setItem('currentUser', JSON.stringify(res.json().login));

          localStorage.setItem('role', res.json().login.role[0]);

        }
        return res.json();
      },
      err => {
        return err;
      }
      )
  }

  logout() {
    localStorage.removeItem('role');
  }
  getItem(): Observable<any> {
    const getItemUrl = this.url + 'get/item/list';
    return this.http
      .get(getItemUrl, {})
      .map(
      res => {
        return res.json();
      },
      err => {
        return err;
      }
      )
  }


}
