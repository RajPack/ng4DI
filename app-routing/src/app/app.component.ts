import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/Router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private activatedRoute: ActivatedRoute) {

  }


}
