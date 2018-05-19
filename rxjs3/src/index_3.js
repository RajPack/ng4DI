import { Observable } from 'rxjs/Observable';

var numberObs = Observable.create(function subscribe(observer) {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.next('a');
    observer.next(4);
});

function multiplyByN(n) {
    let parentObs = this;
    let outputObs = Observable.create(function subscribe (outputObserver) {
        let localObserver = {
            next: (val) => {
                outputObserver.next(val * n);
            },
            error: (error) => {console.log(`error ${error}`)}
        }
        parentObs.subscribe(localObserver);
    });
    return outputObs;
}
Observable.prototype.multiply = multiplyByN;
var observer1 = {
    next: (val) => { console.log(val); }
};
numberObs.multiply(6).subscribe(observer1);
numberObs.multiply(32).subscribe(observer1);
// numberObs.m10().subscribe(observer1);
// multiplyByTen(numberObs).subscribe(observer1);
// numberObs.subscribe(observer1);