/**
 * this keyword value is determined by 2 rules
 * 1. In regular function call this keyword
 * point to the window object
 * 2. In method call this keyword point to
 * the Object which that is calling the method
 */

// Regular function call
function greet() {
  console.log("Have a nice day!");
  console.log(this);
}

greet();

// method call
const john = {
  name: "John",
  age: 30,
  greet() {
    console.log(`Hello, my name is ${this.name}!`);
    console.log(this);
  },
};

john.greet();

// Regular function call in method call
const mark = {
  name: "Mark",
  age: 30,
  greet() {
    console.log(`Hello, my name is ${this.name}!`);
    console.log(this);
  },
  callGreet() {
    greet();
  },
};

mark.callGreet();
