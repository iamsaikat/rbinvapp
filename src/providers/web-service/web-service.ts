import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


/*
  Generated class for the WebServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
let apiUrl = 'http://182.76.63.74:8080/rbinv/';
@Injectable()
export class WebServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello WebServiceProvider Provider');
  }
  
  postData(credentials, type) {
    return new Promise((resolve, reject) => {

      this.http.post(apiUrl + type, credentials)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }

}

