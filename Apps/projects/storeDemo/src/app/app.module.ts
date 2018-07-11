import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { TutorialReducer } from "./reducers/tutorials.reducer";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      tutorial: TutorialReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
