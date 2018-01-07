import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import {ProductSectionComponent} from './productSection/productSection.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
