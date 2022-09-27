// Array of
let numbers = Array.of(3);
console.log(numbers.length);
console.log(numbers[0]);

let chars = Array.of('A', 'B', 'C');
console.log(chars.length);
console.log(chars);

if (!Array.of) {
  Array.of = function () {
    return Array.prototype.slice.call(arguments);
  };
}

function arrayFromArgs() {
  var results = [];
  for (var i = 0; i < arguments.length; i++) {
    results.push(arguments[i]);
  }
  return results;
}
var fruits = arrayFromArgs('Apple', 'Orange', 'Banana');
console.log(fruits);

// Create an Array from an array-like object
function arrayFromArgs() {
  return Array.from(arguments);
}
console.log(arrayFromArgs(1, 'A'));


// JavaScript Array Array.from() with a mapping function
function addOne() {
  return Array.from(arguments, x => x + 1);
}
console.log(addOne(1, 2, 3));


// JavaScript Array Array.from() with a this value
let doubler = {
  factor: 2,
  double(x) {
    return x * this.factor;
  }
}
let scores = [5, 6, 7];
let newScores = Array.from(scores, doubler.double, doubler);
console.log(newScores);


// Create an array from an iterable object
let even = {
  *[Symbol.iterator]() {
    for (let i = 0; i < 10; i += 2) {
      yield i;
    }
  }
};
let evenNumbers = Array.from(even);
console.log(evenNumbers);

// Array Find
let customers = [{
  name: 'ABC Inc',
  credit: 100
}, {
  name: 'ACME Corp',
  credit: 200
}, {
  name: 'IoT AG',
  credit: 300
}];

const newUser = [];

for (let i = 0; i < customers.length; i++) {
  const user = customers.find(customer => customer.credit > 100);

  let index = customers.indexOf(user);
  newUser.push(customers.splice(index, 1));
}
console.log(newUser);

