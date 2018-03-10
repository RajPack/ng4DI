import { Injectable } from '@angular/core';

@Injectable()
export class ProductListService {
    private list: any[];
    constructor() {
        this.list = [1, 2, 3, 4, 5];
    }
    public getProductList() {
        console.log(this.list);
        return this.list;
    }
    public setProductList (list) {
        this.list = list;
    }
}
