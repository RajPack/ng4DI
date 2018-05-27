//es6 inheritance 

class Vehicle {
    constructor(arg){
        //object destructuring below - es6
        var {make, model , year} = arg ||{};
        this.make = make;
        this.model = model;
        this.year = year;
    }
    startEngine(){
        console.log("Vehicle starting engine");
    }
    stopEngine() {
        console.log('Vehicle stopped');
    }
    accelarate() {
        console.log("Vechile throttling now..")
    }
}

class Car extends Vehicle{
    constructor(args){
       super(args);
    }
}

// extend(Car, Vehicle);


// function extend(child, parent) {
//     debugger;
// }

var myCar = new Car();
myCar.accelarate();


// es5 inheritance

function Computer (args) {

    this.title = "Computer";
    var {make, model , year} = args ||{};
    this.make = make;
    this.model = model;
    this.year = year;
}
Computer.staticData = "Computer is good";
Computer.prototype.turnOn = function() {
    console.log("computer turned ON!!");
}
Computer.prototype.turnOff = function() {
    console.log("computer Shut now!!");
}

function Desktop (args){
    this.superClass(args);
}
extend (Desktop, Computer);
Desktop.prototype.turnOn = function() {
    console.log("Desktop is turned on now!!");
}



var myComputer = new Desktop();
myComputer.turnOn();
console.log(myComputer.title);
console.log(Desktop.staticData);

function extend(child, parent){
    child.prototype = Object.create(parent.prototype);
    child.prototype.superClass = parent;
    var parentKeys = Object.keys(parent);
    for(key of parentKeys){
        child[key] = parent[key];
    }
}