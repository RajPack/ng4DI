import { Observable, Subject } from 'rxjs/Rx';

let prodList = [
    {name: {shortName: "tie", desc: "a tie"} , price: 121},
    {name: {shortName: "shoe", desc: "a shoe"}, price: 122},
    {name: {shortName: "shirt", desc: "a shirt"}, price: 221},
    {name: {shortName: "pant", desc: "a pant"}, price: 222},
]


// var numberObs = Observable.of(1,2,3,4,5,6,7);
var prodObs = Observable.from(prodList).pluck("price");

prodObs.filter((val) => {
    return val>200 ? true : false;
}).subscribe({
    next: (val) => {console.log(val);},
    complete: () => {console.log(`subscription completed`)}
});

var clicks = Observable.fromEvent(document, 'click');
var xCor = clicks.pluck('clientX');
var yCor = clicks.pluck('clientY');
xCor.zip(yCor, function(x,y) {
    return {xCor: x, yCor: y};
}).map((val) => {
    return `you click on the co-ordinates ${val.xCor} , ${val.yCor}`
}).subscribe(x => console.log(x));
// yCor.subscribe(x => console.log(x));