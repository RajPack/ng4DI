import { Observable, Subject } from 'rxjs/Rx';


//switch
(function () {
    let even = Observable.interval(500).filter((val) => { return val % 2 === 0 ? true : false });

    let clicks = Observable.fromEvent(document, "click");
    let higherOrder = clicks.map((x) => { return even });
    higherOrder.switch().subscribe({
        next: (val) => { console.log(val) }
    })
});

//mergeMap
(function () {
    let even = Observable.interval(100).filter((val) => { return val % 2 === 0 ? true : false });
    let evenX10 = Observable.interval(400).filter((val) => { return val % 2 === 0 ? true : false }).map((val) => { return val * 10 });
    let evenX100 = Observable.interval(100).filter((val) => { return val % 2 === 0 ? true : false }).map((val) => { return val * 100 });


    let twoSec = Observable.interval(2000);

    let numbersEveryTwoSecs = even.window(twoSec).map((innerObs) => {
        return innerObs.take(2);
    }).mergeAll();

    var result = even.take(4).mergeMap(x => evenX10.take(4).map((i) => {
        return `${x}-${i}`;
    }));

    let subscriber = {
        next: (val) => { console.log(val); },
        complete: () => { console.log(`completed!!`) }
    };

    //numbersEveryTwoSecs.subscribe(subscriber);
    result.subscribe(subscriber);
});

//scan
(function () {
    let even = Observable.interval(10).filter((val) => { return val % 2 === 0 ? true : false });
    even.take(10).scan(function (acc, val) {
        return val + acc;
    }, 1).subscribe({
        next: (val) => { console.log(val); }
    })
});

//mergeScan
(function () {
    const click$ = Observable.fromEvent(document, 'click');
    const one$ = click$.mapTo(1);
    const seed = 0;
    const count$ = one$.mergeScan((acc, one) => Observable.of(acc + one), seed);
    const count1$ = one$.scan(function(acc, val){
        return acc+val;
    }, 0);
    count1$.subscribe(x => console.log(x));
});

//switch map
