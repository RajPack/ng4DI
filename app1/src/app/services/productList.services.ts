import { Injectable } from '@angular/core';

@Injectable()
export class ProductListService {
    consturctor() {

    }
    public getProductList() {
        const list = [1, 2, 3, 4, 5];
        return list;
    }
}
