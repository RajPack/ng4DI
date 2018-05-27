import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { menu, MedEquipments, MobileEquipments } from '../data/mockData';

@Injectable()
export class MenuProdService {
  dataMap = {
    medProds: MedEquipments,
    mobilProds: MobileEquipments
  };
  constructor() { }
  getNavBarMenu () {
    const menuObservable: Observable<any> = Observable.create((observer: Observer<any>) => {
      observer.next(menu);
      observer.complete();
    });
    return menuObservable;
  }
  getFloatingMenuItems(key) {
    const data = this.dataMap[key];
    const floatingObservable: Observable<any> = Observable.create((observer: Observer<any>) => {
      const keys = data.map((item) => {
        return {key: item.name, type: key};
      });
      observer.next(keys);
      observer.complete();
    });
    return floatingObservable;
  }
}
