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