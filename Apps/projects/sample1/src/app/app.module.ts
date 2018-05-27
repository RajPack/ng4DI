import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import {ProductSectionComponent} from './productSection/productSection.component';
import { ProductDetailComponent } from './productDetail/productDetail.component';
import { ProductListService } from '../app/services/productList.services';

@NgModule({
  declarations: [
    AppComponent,
    ProductSectionComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: 'ProductService', useClass: ProductListService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
