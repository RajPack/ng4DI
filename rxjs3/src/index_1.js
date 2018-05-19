import Rx from 'rxjs/Rx';
let secondMessage = "Hope you are doing fine"
let myObservable = Rx.Observable.create(function subscribe(Observer) {
    Observer.next("Hi there");
    Observer.next(secondMessage);  
    setTimeout(() => {
        Observer.next(secondMessage);
        Observer.next('hello');
    }, 5000);
});

let rajObserver = {
    next: (val) => console.log(`Raj Recieved message from myObservable: ${val}`),
    error: (error) => console.log(error),
    complete: () => console.log("completed subscription"),
    abc: () => { console.log(`abc invoked`) }
};
let chethanObserver = {
    next: (val) => console.log(`Chethan Recieved message from myObservable: ${val}`),
    error: (error) => console.log(error),
    complete: () => console.log("completed subscription")
};

myObservable.subscribe(rajObserver);
secondMessage = "Whats up !!";
// setTimeout (function() {
//     secondMessage = "Whats up !!";
// }, 6000);

setTimeout(function () {
    myObservable.subscribe(chethanObserver);
}, 10000);