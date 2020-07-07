import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo, STATUS } from 'angular-in-memory-web-api';

import { StorageService } from './storage.service';

// Pseudo guid generator
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor(private storageService: StorageService) { }

  createDb() {
    if (!this.storageService.get('heroes')) {
      this.storageService.set('heroes', []);
    }

    return {};
  }

  get(reqInfo: RequestInfo) {
    const collection = this.storageService.get(reqInfo.collectionName) as any[];
    const result = reqInfo.id ? reqInfo.utils.findById(collection, reqInfo.id) : collection;

    return reqInfo.utils.createResponse$(() => {
      return {
        body: result,
        status: STATUS.OK
      }
    });
  }

  post(reqInfo: RequestInfo) {
    const item = reqInfo.utils.getJsonBody(reqInfo.req);
    item.id = guid();

    const collection = this.storageService.get(reqInfo.collectionName) as any[];

    this.storageService.set(reqInfo.collectionName, [...collection, item]);

    return reqInfo.utils.createResponse$(() => {
      return { status: STATUS.OK }
    });
  }

  put(reqInfo: RequestInfo) {
    const collection = this.storageService.get(reqInfo.collectionName) as any[];
    const index = collection.findIndex(item => item.id === reqInfo.id);
    collection[index] = reqInfo.utils.getJsonBody(reqInfo.req);

    this.storageService.set(reqInfo.collectionName, collection);

    return reqInfo.utils.createResponse$(() => {
      return { status: STATUS.OK }
    });
  }

  delete(reqInfo: RequestInfo) {
    const collection = this.storageService.get(reqInfo.collectionName) as any[];
    this.storageService.set(reqInfo.collectionName, collection.filter(item => item.id !== reqInfo.id));

    return reqInfo.utils.createResponse$(() => {
      return { status: STATUS.OK }
    });
  }
}
