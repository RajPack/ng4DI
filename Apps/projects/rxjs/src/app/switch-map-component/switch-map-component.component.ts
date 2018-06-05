import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-switch-map-component',
  templateUrl: './switch-map-component.component.html',
  styleUrls: ['./switch-map-component.component.css']
})
export class SwitchMapComponentComponent implements OnInit {

  keyString$ = new Subject<String>();

  reversedKeyString$ = this.keyString$.pipe(map((
                        value:string)=> value.split('').reverse().join("")
                      ));
  constructor() { }

  ngOnInit() {
  }
}
