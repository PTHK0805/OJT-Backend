class Person{
  constructor(name) {
    this.name = name;
  }

  getName() {
    console.log(this.name);
  }
}

const person = new Person('John');
person.getName();