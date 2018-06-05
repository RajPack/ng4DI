import { Component, OnInit } from '@angular/core';
import {Observable, Observer, Subject} from 'rxjs';
// import { Observable} from 'rxjs/Observable';
// import { Observer } from 'rxjs/Observer';
// import { Subject } from 'rxjs/Subject';
import { map, share } from 'rxjs/operators';


let count = 0;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Rxjs demo';
  list1: Observable<any>;
  list2: Observable<any>;
  mySubject = new Subject();
  myObs = this.mySubject.pipe(map(val => {
    console.log(count);
    return `${val} ${++count} times`
  }),
  share()
);

  ngOnInit(){
    this.list1 = this.createObserverableUsingCreate();
    this.list2 = this.createObservervableUsingConstructor();
  }

  createObservervableUsingConstructor(){
    return new Observable((observer)=>{
      observer.next(10);
    });
  }
  createObserverableUsingCreate(){
    return new Observable((observer)=>{
      observer.next(12);
    });
  }
}
