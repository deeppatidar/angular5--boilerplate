import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { HttpInterceptor } from "./httpinterceptor"


@Injectable()
export class AppService {

  constructor(private http : HttpInterceptor) { }

  public getTableData(): Observable<any> {
        const url = '../../../assets/tabledata.json';
        return this.http.get(url).map((resp: Response) => <any>(resp.json()));
    };

}
