import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Product } from '../data/prod.interface';
import { MedEquipments, MobileEquipments } from '../data/mockData';

@Injectable()
export class TopProdService {
  constructor() { }
  getTopProdList() {
    let topItems = [];
    const myObservable: Observable<any> = Observable.create((observer: Observer<Product[]>) => {
        topItems = [ ...topItems , ...MedEquipments.filter((item, index) => {
          return index < 3 ? true : false;
        })];
        topItems = topItems.map((prod) => {
          prod.type = 'medProds';
          return prod;
        });
        topItems = [ ...topItems , ...MobileEquipments.filter((item, index) => {
          return index < 2 ? true : false;
        })];
        topItems = topItems.map((prod) => {
          prod.type = prod.type ? prod.type : 'mobilProds';
          return prod;
        });
        observer.next(topItems);
        observer.complete();
    });
    return myObservable;
  }
}

