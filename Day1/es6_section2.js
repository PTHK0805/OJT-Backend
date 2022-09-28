// Array Destructuring
function getScores() {
  return [70, 80, 90, 100];
}

let [x, y, z] = getScores();
console.log(x);
console.log(y);
console.log(z);

let [x1, y1 ,...args] = getScores();
console.log(x1); 
console.log(y1); 
console.log(args); 

function getProfile() {
  return [
      'John',
      'Doe',
      ['Red', 'Green', 'Blue']
  ];
}

let [
  firstName,
  lastName,
  [
      color1,
      color2,
      color3
  ]
] = getProfile();

console.log(color1, color2, color3);

let a = 10, 
    b = 20;

[a, b] = [b, a];

console.log(a);
console.log(b);


function stat(a, b) {
  return [
      a + b,
      (a + b) / 2,
      a - b
  ]
}

let [sum, average, difference] = stat(20, 10);
console.log(sum, average, difference);

// Object Destructuring


const person = {
  firstName1: 'John',
  lastName1: 'Doe',
  currentAge: 28
};

let { firstName1, lastName1, currentAge=21} = person;
console.log(firstName1);
console.log(lastName1);
console.log(currentAge);


let employee = {
  id: 1001,
  name: {
      firstName2: 'John',
      lastName2: 'Smith'
  }
};

let {
  id,
  name: {
      firstName2,
      lastName2
  }
} = employee;

console.log(firstName2);
console.log(lastName2); 

let display = ({firstName3, lastName3}) => console.log(`${firstName3} ${lastName3}`);

let person1 = {
    firstName3: 'John',
    lastName3: 'Doe'
};

display(person1);