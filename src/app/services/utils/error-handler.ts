import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { LoggingService } from './logging.service';
//import * as StackTrace from 'stacktrace-js';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
constructor(private injector: Injector) { }
 handleError = (error: Response) => {
    const loggingService = this.injector.get(LoggingService);
    const location = this.injector.get(LocationStrategy);
    //const message =  error.message ? error.message : error.toString();
    const url = location instanceof PathLocationStrategy ? location.path() : '';
   const locationUrl = location['_platformLocation'].location.href;
   loggingService.log({url, locationUrl, 'error': error});
    return Observable.throw({url, locationUrl, 'error': error});
  }

}

// handleError(error) {
//     const loggingService = this.injector.get(LoggingService);
//     const location = this.injector.get(LocationStrategy);
//     const message = error.message ? error.message : error.toString();
//     const url = location instanceof PathLocationStrategy ? location.path() : '';
//    // get the stack trace, lets grab the last 10 stacks only
//     // StackTrace.fromError(error).then(stackframes => {
//     //   const stackString = stackframes
//     //     .splice(0, 20)
//     //     .map(function(sf) {
//     //       return sf.toString();
//     //     }).join('\n');
//     // // log on the server
//     //
//     // });
//     loggingService.log({ message, url});
//       return Observable.throw(error)
//   }
