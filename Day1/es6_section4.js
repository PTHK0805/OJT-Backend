class Person {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    newName = newName.trim();
    if (newName === '') {
      throw new Error('The name cannot be empty').message;
    }
    this._name = newName;
 
  }
}
const person = new Person('John Smith');
console.log(person.name);


let meeting = {
  attendees: [],
  add(attendee) {
      console.log(`${attendee} joined the meeting.`);
      this.attendees.push(attendee);
      return this;
  },
  get latest() {
      let count = this.attendees.length;
      return count == 0 ? undefined : this.attendees[count - 1];
  }
};

meeting.add('John').add('Jane').add('Peter');
console.log(`The latest attendee is ${meeting.latest}.`);
console.log(meeting.attendees);


// Static Properties
class Item {
  constructor(name, quantity) {
    this.name = name;
    this.quantity = quantity;
    this.constructor.count++;
  }
  static count = 0;
  static getCount() {
    return Item.count;
  }
}

let pen = new Item('Pen', 5);
let notebook = new Item('notebook', 10);

console.log(Item.getCount());

// Computed Property
let name1 = 'fullName';

class Person1 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get [name1]() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let person1 = new Person1('John', 'Doe');
console.log(person1.fullName);

// Inheritance
//function Animal(legs) {
//  this.legs = legs;
//}
//
//Animal.prototype.walk = function() {
//  console.log('walking on ' + this.legs + ' legs');
//}
//
//function Bird(legs) {
//  Animal.call(this, legs);
//}
//
//Bird.prototype = Object.create(Animal.prototype);
//Bird.prototype.constructor = Animal;
//
//
//Bird.prototype.fly = function() {
//  console.log('flying');
//}
//
//var pigeon = new Bird(2);
//pigeon.walk(); 
//pigeon.fly();  
//
//console.log(pigeon);

class Animal {
  constructor(legs) {
    this.legs = legs;
  }

  walk() {
    console.log(`walking on ${ this.legs } legs`);
  }
}

class Birds extends Animal {
  constructor(legs, color) {
    super(legs);
    this.color = color;
  }

  fly() {
    console.log('flying');
  }

  walk() {
    super.walk();
    console.log(`walking on ${ this.legs } legs and color is ${this.color}`);
  }
}

class Dogs extends Animal {
  constructor(legs) {
    super(legs);
  }

}

const pigeon = new Birds(2,'green');
pigeon.walk();
pigeon.fly();

const dog = new Dogs(4);
dog.walk();

class Queue extends Array {
  enqueue(e) {
      super.push(e);
  }
  dequeue() {
      return super.shift();
  }
  peek() {
      return !this.empty() ? this[0] : undefined;
  }
  empty() {
      return this.length === 0;
  }
}

var customers = new Queue();
customers.enqueue('A');
customers.enqueue('B');
customers.enqueue('C');

while (!customers.empty()) {
  console.log(customers.dequeue());
}