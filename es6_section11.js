// Object.assign
// Clone
let widget = {
  color: 'red'
};

let clonedWidget = Object.assign({}, widget);

console.log(clonedWidget);

// Merge 
let box = {
  height: 10,
  width: 20
};

let style = {
  color: 'Red',
  borderStyle: 'solid'
};

let styleBox = Object.assign({}, box, style);

console.log(styleBox);

// If the source objects have the same property, the property of the later object overwrites the earlier one
let box1 = {
  height: 10,
  width: 20,
  color: 'Red'
};

let style1 = {
  color: 'Blue',
  borderStyle: 'solid'
};

let styleBox1 = Object.assign({}, box1, style1);

console.log(styleBox1);

//Object.is
let amount = +0,
  volume = -0;

console.log(volume === amount);
console.log(Object.is(amount, volume));

let quantity = NaN;
console.log(quantity === quantity);
console.log(Object.is(quantity, quantity));