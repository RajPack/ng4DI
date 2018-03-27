import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { BlogService, BlogCommentsService } from './blog/blog.service';

import { AppComponent } from './app.component';
import { BlogListComponent } from './blogList/blogList.component';
import { BlogEditComponent } from './blogEdit/blogEdit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogAddComponent } from './blogAdd/blogAdd.component';
import { CommentsComponent } from './comments/comments.component';


@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    BlogEditComponent,
    BlogAddComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    BlogService,
    BlogCommentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
