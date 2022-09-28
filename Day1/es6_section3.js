import { message, multiply, sum } from './message.js'

const h1 = document.createElement('h1');
h1.textContent = message

document.body.appendChild(h1);

console.log(sum(10,20));
console.log(multiply(10,20));