import { Injectable } from '@angular/core';

@Injectable()
export class ProductListService {
    private list: any[];
    consturctor() {
        this.list = [1, 2, 3, 4, 5];
    }
    public getProductList() {
        console.log(this);
        return this.list;
    }
    public setProductList (list) {
        this.list = list;
    }
}
