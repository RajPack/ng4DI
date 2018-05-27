import {Observable, Subject} from 'rxjs/Rx';

let even = Observable.interval(1000).filter((val) => {  return val%2===0 ? true : false});
let evenX10 = Observable.interval(1000).filter((val) => {  return val%2===0 ? true : false}).map((val) => {  return val*10});
let evenX100 = Observable.interval(100).filter((val) => {  return val%2===0 ? true : false}).map((val) => {  return val*100});


let twoSec = Observable.interval(2000);

let numbersEveryTwoSecs = even.window(twoSec).map((innerObs) => {
    return innerObs.take(2);
}).mergeAll();

var result = even.take(4).mergeMap(x => evenX10.take(4).map((i) => {
    return `${x}-${i}`;
}));

let subscriber = {
    next: (val) => {console.log(val);},
    complete: () => {console.log(`completed!!`)}
};

//numbersEveryTwoSecs.subscribe(subscriber);
result.subscribe(subscriber);

// even.merge(evenX10,evenX100).subscribe(subscriber);

// even.subscribe(subscriber);
// evenX10.subscribe(subscriber);
// evenX100.subscribe(subscriber);