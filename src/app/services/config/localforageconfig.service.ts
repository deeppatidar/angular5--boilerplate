import { Injectable } from '@angular/core';
import { NgForageConfig} from 'ngforage';
import { ONESKY , ONESKYSTORAGE} from '../constants';
@Injectable()
export class LocalforageconfigService {

  constructor(ngfConfig: NgForageConfig) {
    console.log(ONESKY);
    ngfConfig.configure({
      name: ONESKYSTORAGE,
      storeName: ONESKY,
      cacheTime: 3000,
      size: 1024 * 1024 * 4,
      driver: [
        // defaults to indexedDB -> webSQL -> localStorage -> sessionStorage
        NgForageConfig.DRIVER_INDEXEDDB,
        NgForageConfig.DRIVER_LOCALSTORAGE
      ]
    });
  }
}
