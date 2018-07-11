import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Tutorial } from "./models/tutorial";
import { AppState } from "./state/app.state";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  tutorials$: Observable<Tutorial[]>;
  constructor(private store: Store<AppState>) {}
  ngOnInit() {
    this.tutorials$ = this.store.select("tutorial");
    this.tutorials$.subscribe(function(item) {
      console.log(item);
    });
  }
}
