import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  obj: any;

  ngOnInit() { 
    this.obj = {name: "Joe", age: 32};
    setTimeout(() => this.obj.name = "Smith", 2000);
  }
}
