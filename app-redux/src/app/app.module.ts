import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostService } from './services/post.service';
import { AppState } from './services/app.state';


@NgModule({
  declarations: [
    AppComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PostService, AppState],
  bootstrap: [AppComponent]
})
export class AppModule { }
