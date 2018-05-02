import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/empty';
import {Injectable} from '@angular/core';
import { GlobalErrorHandler } from "../utils/error-handler";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  constructor(public globalErrorHandler : GlobalErrorHandler) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(this.setAuthorizationHeader(req))
      // .catch((event) => {
      //   console.log('event', event);
      //   if (event instanceof HttpErrorResponse) {
      //     return this.catch401(event);
      //   }
      // });
      .catch(this.globalErrorHandler.handleError);
  }
// Request Interceptor to append Authorization Header
  private setAuthorizationHeader(req: HttpRequest<any>): HttpRequest<any> {
    // Make a clone of the request then append the Authorization Header
    // Other way of writing :
    // return req.clone({headers: req.headers.set('Authorization', this.authService.token )});
    return req.clone({ setHeaders: { Authorization: '3334rrftgfgrd453sww' } });
  }
  // Response Interceptor
  private catch401(error: HttpErrorResponse): Observable<any> {
    // Check if we had 401 response
    if (error.status === 401) {
      // redirect to Login page for example
      return Observable.empty();
    }
    return Observable.throw(error);
  }
}


//
// import { Http, Request, RequestOptions, RequestOptionsArgs, Response, XHRBackend } from "@angular/http";
// import {HttpClient} from '@angular/common/http';
// import { Injectable } from "@angular/core";
// import { Observable } from "rxjs/Rx";
//
// import { GlobalErrorHandler } from "../utils/error-handler";
//
//
// // operators
// import "rxjs/add/operator/catch"
// import "rxjs/add/observable/throw"
// import "rxjs/add/operator/map"
//
// @Injectable()
// export class HttpInterceptor extends Http {
//
//     constructor(
//         backend: XHRBackend,
//         options: RequestOptions,
//         public http: HttpClient,
//         public globalErrorHandler : GlobalErrorHandler
//     ) {
//         super(backend, options);
//     }
//
//     public request(url: string|Request, options?: RequestOptionsArgs) {
//         return super.request(url, options)
//             .catch(this.globalErrorHandler.handleError)
//     }
//
// }
