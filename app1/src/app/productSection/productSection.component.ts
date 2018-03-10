import { Component , Inject } from '@angular/core';
import { ProductListService } from '../services/productList.services';

@Component({
    selector: 'app-product-section',
    templateUrl: './productSection.html'
})
export class ProductSectionComponent {
    private productList;
    constructor( @Inject('ProductService') private productService) {
        this.productList = this.productService.getProductList();
        this.productService.setProductList(['Monday', 'Tuesday', 'Wednesday']);
    }
}



