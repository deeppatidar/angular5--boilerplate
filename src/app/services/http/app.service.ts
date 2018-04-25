import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
//import { AuthenticationInterceptor } from "./httpinterceptor"
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AppService {

  constructor(private http : HttpClient) { }

  public getTableData(): Observable<any> {
        const url = '../../../assetss/tabledata.json';
        return this.http.get(url);
    };

}
