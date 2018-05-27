import { Component , Inject } from '@angular/core';
import { ProductListService } from '../services/productList.services';

@Component({
    selector: 'app-product-detail',
    templateUrl: './productDetail.html'
})
export class ProductDetailComponent {
    constructor (@Inject('ProductService') private productListService: ProductListService) {
        console.log(this.productListService.getProductList());
    }
}
