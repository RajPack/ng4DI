import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TopProdListComponent } from './top-prod-list/top-prod-list.component';
import { AppRouterModule } from './app-router/app-router.module';
import { TopProdService } from './services/top-prod.service';
import { MenuProdService } from './services/menu-prod.service';
import { CommonModule } from '@angular/common';
import { ProdResolveService } from './services/prod.resolve.guard';
import { ProductViewComponent } from './product-view/product-view.component';
import { FloatingMenuComponent } from './floating-menu/floating-menu.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    TopProdListComponent,
    ProductViewComponent,
    FloatingMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TopProdService, MenuProdService, ProdResolveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
