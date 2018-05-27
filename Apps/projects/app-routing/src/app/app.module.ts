import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app.routing.module';
import { CatalogItemComponent } from './catalog-item/catalog-item.component';
import { CatalogService } from './catalog/catalog.data';
import { CatalogItemEditComponent } from './catalog-item-edit/catalog-item-edit.component';
import { PrivilegedComponent } from './privileged/privileged.component';
import { LoginComponent } from './login/login-component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogComponent,
    ContactUsComponent,
    AboutComponent,
    NotFoundComponent,
    CatalogItemComponent,
    CatalogItemEditComponent,
    PrivilegedComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [CatalogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
