// Arrow function
function Car() {
  this.speed = 0;

  this.speedUp = function (speed) {
      this.speed = speed;
      setTimeout(
          () => console.log(this.speed),
          1000);

  };
}

let car = new Car();
car.speedUp(50);

let setColor = (color) => ({ value : color });

let backgroundColor = setColor('Red');
console.log(backgroundColor.value);

const greeting = document.querySelector('#greeting');
const username = document.querySelector('#username');

// Can't use Arrow Function
username.addEventListener('keyup', function() {
  greeting.textContent = 'Hello ' + this.value;
});
