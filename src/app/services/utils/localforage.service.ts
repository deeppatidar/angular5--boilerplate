import {NgForage, NgForageConfig} from 'ngforage';
import { Injectable } from '@angular/core';

@Injectable()
export class LocalforageService {

  constructor(private readonly ngf: NgForage) {}

  verifyItem(key, item): Promise<any> {
    let _this = this;
    return new Promise(function(resolve, reject) {
    if(!item || item.expTime < new Date().getTime()) {
        _this.removeItem({key: key}).then(function() {
          resolve({value:null});
      });
      } else {
         resolve(item);
      }
    });
  };

  public setItem(options) : Promise<any> {
    if(!options || !options.key) {
      return Promise.reject(null);
    }
    // expTime should be in seconds
    let item = {
    value: options.value,
    expTime: 24 * 60 * 60
    };
    if(options.expTime) {
    item['expTime'] = options.expTime;
    }
    let expiry = new Date().setSeconds(item['expTime']);
    item['expTime'] = new Date(expiry).getTime();
    return this.ngf.setItem(options.key, item).then(data => {
      return Promise.resolve(data);
      },
       error => {
         return Promise.reject(error);
      });
  };

  public getItem(options) : Promise<any> {
    if(!options || !options.key) {
      return Promise.reject(null);
    }
    return this.ngf.getItem(options.key).then(data => {
      return this.verifyItem(options.key, data).then(item => {
          return Promise.resolve(data);
        });
      },
      error => {
          return Promise.reject(error);
    });
  };

  public removeItem(options) : Promise<any> {
    if(!options || !options.key) {
    return Promise.reject(null);
    }
    return this.ngf.removeItem(options.key).then(data => {
      return Promise.resolve(data);
      },
      error => {
        return Promise.reject(error);
      });
  };

  public removeAllItem() : Promise<any> {
    return this.ngf.clear().then(data => {
      return Promise.resolve(data);
    },
    error => {
      return Promise.reject(error);
    });
  };
}
