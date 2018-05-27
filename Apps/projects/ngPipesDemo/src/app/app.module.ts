import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClockPipe } from './Pipes/clockPipe';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    ClockPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
