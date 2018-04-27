import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class WebapiService {

  constructor(private httpClient: HttpClient) {
  }

  public getHolidayData(path: string, params: string): Observable<any> {
      return this.httpClient.get(path + params)
        .catch(err => {
          return Observable.throw(err);
        });
  }
}
