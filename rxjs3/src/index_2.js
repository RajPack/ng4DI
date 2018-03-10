import Rx from 'rxjs/Rx';

// let mySubject = new Rx.Subject();
// let mySubject = new Rx.BehaviorSubject();
// let mySubject = new Rx.ReplaySubject();
let mySubject = new Rx.AsyncSubject();

let subscriber1 = {
    currentVal: undefined,
    previousVal: undefined
}
subscriber1.next = function (value) { 
    this.previousVal = this.currentVal;
    this.currentVal = value;
    console.log(`subscriber 1 recieved : ${value}`); 
}.bind(subscriber1);


let subscriber2 = {
    next: (value) => { console.log(`subscriber 2 recieved : ${value}`); }
}
mySubject.next(10);
mySubject.next(11);
mySubject.next(12);
mySubject.next(13);
mySubject.subscribe(subscriber1);
mySubject.next(20);
console.log(subscriber1);

mySubject.next(30);

mySubject.subscribe(subscriber2);
mySubject.next(40);

mySubject.complete();

console.log(subscriber1);