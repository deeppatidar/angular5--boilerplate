import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class AppService {

  constructor (private http: Http) {}
  
    loginUser(loginData): Observable<any> {
      console.log(loginData);
        // const url = 'https://9c6d9031.ngrok.io/file';
        // return this.http.post(url, loginData).map((resp: Response) => (resp.json()))
        //   .catch((e) => this.handleError(e));
        return;
    };

    postFile(fileToUpload: File): Observable<boolean> {
        const url = 'https://9c6d9031.ngrok.io/file';
        const formData: FormData = new FormData();
        formData.append('fileKey', fileToUpload, fileToUpload.name);
        return this.http.post(url, formData).map((resp: Response) => (resp.json()))
          .catch((e) => this.handleError(e));
     };

      private handleError(error: any): Promise<any> {
          console.error('An error occurred', error);
          return Promise.reject(error.message || error);
      };
}
