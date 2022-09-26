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