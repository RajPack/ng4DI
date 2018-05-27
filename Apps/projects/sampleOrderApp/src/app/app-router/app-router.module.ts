import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TopProdListComponent } from '../top-prod-list/top-prod-list.component';
import { ProductViewComponent } from '../product-view/product-view.component';
import { ProdResolveService } from '../services/prod.resolve.guard';

const appRoutes: Routes = [
  {path: '', component: TopProdListComponent},
  {path: 'product/:type/:name', component: ProductViewComponent , resolve: {data: ProdResolveService}}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRouterModule { }
