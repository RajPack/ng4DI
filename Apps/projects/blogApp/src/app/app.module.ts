import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { BlogService, BlogCommentsService, BlogDetailResolver } from './blog/blog.service';

import { AppComponent } from './app.component';
import { BlogListComponent } from './blogList/blogList.component';
import { BlogEditComponent } from './blogEdit/blogEdit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogAddComponent } from './blogAdd/blogAdd.component';
import { CommentsComponent } from './comments/comments.component';
import { BlogRoutingModule } from './blog.routing.module';
import { BlogPageComponent } from './blog-page/blog-page.component';


@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    BlogEditComponent,
    BlogAddComponent,
    CommentsComponent,
    BlogPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BlogRoutingModule
  ],
  providers: [
    BlogService,
    BlogDetailResolver,
    BlogCommentsService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
