import { Injectable } from '@angular/core';
import { NgForageConfig} from 'ngforage';
import * as constant from '../constants';
@Injectable()
export class LocalforageConfigService {

  constructor(ngfConfig: NgForageConfig) {
    ngfConfig.configure({
      name: constant.ONESKYSTORAGE,
      storeName: constant.ONESKY,
      cacheTime: 3000,
      size: 1024 * 1024 * 4,
      driver: [
        NgForageConfig.DRIVER_INDEXEDDB,
        NgForageConfig.DRIVER_LOCALSTORAGE
      ]
    });
  }
}
