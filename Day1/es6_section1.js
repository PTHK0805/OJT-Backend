// let keyword
let x = 10;
if (x == 10) {
    let x = 20;
    console.log(x); // 20:  reference x inside the block
}
console.log(x); // 10: reference at the begining of the script

for (var i = 0; i < 5; i++) {

    console.log(i);

}

for (var i = 0; i < 5; i++) {
    (function (j) {
        console.log(j);
    })(i);
}

// var keyword

var v = 'v from global scope'
let l = 'l from global scope'

if (true) {
    var v = 'v from local scope'
    let l = 'l from local scope'

    console.log(`local v: ${v}`);
    console.log(`local l: ${l}`)
}
console.log(`global l: ${l}`);
console.log(`global v: ${v}`);

// const keyword
const count = 0;
try {
    count++;
}
catch (err) {
    console.log('Error :', err.message);
}

if (count) {
    console.log(count);
}

const company = {
    name: 'ABC corp',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        zipcode: 95134
    }
};

company.address.country = 'USA';
// company = {};   <-----  Can't -> TypeError
console.log(company);

const colors = ['green', 'blue', 'red', 'orange'];
for (let color of colors) {
    console.log(color);
}

//for (const i = 0; i<colors.length; i++){  <----- Can't -> TypeError
//    console.log(colors[i]);
//}

// Default Parameter
function sayHello(message = 'Hello') {
    console.log(message);
}

sayHello();
sayHello('Hello World');

function sayHi(message) {
    message = (typeof message === 'undefined') ? 'Hi' : message;
    console.log(message);
}

sayHi();

let taxRate = () => 0.1;
let getPrice = function( price, tax = price * taxRate() ) {
    return price + tax;
}

let fullPrice = getPrice(100);
console.log(fullPrice); 

// Rest Parameter
function numbers(a,b, ...args) {
    console.log(args);
    let result = 0;
    for (number of args) {
        result += number
    }
    console.log(result);
}

numbers(1, 2, 3, 4, 5);

function sum(...args) {
    return args
      .filter(function (e) {
        return typeof e === 'number';
      })
      .reduce(function (prev, curr) {
        return prev + curr;
      });
}

let result = sum(10,'Hi',null,undefined,20); 
console.log(result);

// Spread Operator
const odd = [1,3,5];
const combined = [2,...odd, 4,6];
console.log(combined);

let rivers = ['Nile', 'Ganges', 'Yangte'];
let moreRivers = ['Danube', 'Amazon'];

rivers.push(...moreRivers);
console.log(rivers);

let scores = [80, 70, 90];
let copiedScores = [...scores];
console.log(copiedScores);

// Object
let server = {
    name: 'Server',
    restart() {
        console.log("The " + this.name + " is restarting...");
    },
    'starting up'() {
        console.log("The " +  this.name + " is starting up!");
    }
};

server['starting up']();
server.restart();

