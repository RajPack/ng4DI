import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MenuProdService } from './menu-prod.service';
import { MobileEquipments, MedEquipments } from '../data/mockData';

@Injectable()
export class ProdResolveService implements Resolve<any> {
    datamap = {
        mobilProds: MobileEquipments,
        medProds: MedEquipments
    };
    constructor(private menuProdService: MenuProdService) {
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        const type = route.paramMap.get('type');
        const product = route.paramMap.get('name');
        const dataList = this.datamap[type];
        const data = dataList.filter((prod) => {
            return prod.name === product ? true : false;
        });
        const prodObservable = Observable.create((observer) => {
            observer.next(data[0]);
            observer.complete();
        });
        return prodObservable;
    }
}
