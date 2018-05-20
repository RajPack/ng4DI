import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Pipes Demo';
  currentTime: Date;
  constructor() {

  }
  ngOnInit() {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }
}
