import { Component , Inject } from '@angular/core';
import { ProductListService } from '../services/productList.services';

@Component({
    selector: 'app-product-section',
    templateUrl: './productSection.html'
})
export class ProductSectionComponent {
    private productList;
    constructor(@Inject(ProductListService) private productService) {
        this.productList = this.productService.getProductList();
    }
}


