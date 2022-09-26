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

