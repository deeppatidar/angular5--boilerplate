
import { Http, Request, RequestOptions, RequestOptionsArgs, Response, XHRBackend } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";

import { GlobalErrorHandler } from "../utils/error-handler";


// operators
import "rxjs/add/operator/catch"
import "rxjs/add/observable/throw"
import "rxjs/add/operator/map"

@Injectable()
export class HttpInterceptor extends Http {

    constructor(
        backend: XHRBackend,
        options: RequestOptions,
        public http: Http,
        public globalErrorHandler : GlobalErrorHandler
    ) {
        super(backend, options);
    }

    public request(url: string|Request, options?: RequestOptionsArgs) {
        return super.request(url, options)
            .catch(this.globalErrorHandler.handleError)
    }

}
