import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SwitchMapComponentComponent } from './switch-map-component/switch-map-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SwitchMapComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
