import { Injectable } from '@angular/core';
import { isDevMode } from '@angular/core';

@Injectable()
export class LoggingService {

  public error(args: any[]): void {
    if(isDevMode())
    console.error(args);
  }

  public info(args: any[]): void {
    if(isDevMode())
    console.info(args);
  }

  public warn(args: any[]): void {
    if(isDevMode())
    console.warn(args);
  }

  public log(error) {
    console.log("Logging----------", error);
  }

}
