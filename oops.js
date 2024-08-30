/*
Oops - Object Oriented Programming

Object-oriented programming is a paradigm based on concepts of object

How does OOps work?

Create a blueprint then create a new object based on the blueprint

4 Pillars of OOps:-

1. Encapsulation: Data hiding and protection.
2. Abstraction: Hiding the internal details and showing only the necessary information.
3. Inheritance: Reusing code by creating new classes that inherit properties and methods from existing classes.
4. Polymorphism: Same name different implementations.
*/

// constructor functions
function Person(name, gender, birthYear) {
  this.name = name;
  this.gender = gender;
  this.birthYear = birthYear;
  this.calculateAge = function () {
    const age = 2024 - this.birthYear;
    console.log(`Age: ${age}`);
  };
}

const john = new Person("John", "Male", 1998);

// new keyword make 3 things
// const john = {}
// this = john
// john.name = 'John'
// john.gender = 'Male'
// john.birthYear = 1998
// john.calculateAge = f(){}
// return john

console.log(john);

// let date = new Date();
// let string = new String();

const merry = new Person("Merry", "Female", 2003);
console.log(merry);

const steve = new Person("Steve", "Male", 1999);
console.log(steve);

steve.calculateAge();

/* 
what is prototype?
# Every object in JavaScript has a prototype property.

# Inheritance in Javascript achieved using this prototype property
*/

function PersonInheritance(name, gender, birthYear) {
  this.name = name;
  this.gender = gender;
  this.birthYear = birthYear;
}

PersonInheritance.prototype.calculateAge = function () {
  const age = 2024 - this.birthYear;
  console.log(`${this.name} - Age: ${age}`);
};

PersonInheritance.prototype.city = "London";

const johnInheritance = new PersonInheritance("John", "Male", 1998);
console.log("johnInheritance", johnInheritance);

johnInheritance.calculateAge();

console.log(johnInheritance.__proto__ === PersonInheritance.prototype);

/* 
Prototype Chaining
*/
const mark = {
  name: "Mark",
  gender: "Male",
  birthYear: 1997,
};

// const mark = new Object();
// mark.name = "Mark";
// mark.gender = "Male";
// mark.birthYear = 1997;
// finally return

console.log(mark);

console.log("mark instanceof Object is", mark instanceof Object);
console.log(
  "mark.__proto__ === Object.prototype",
  mark.__proto__ === Object.prototype
);

// finally proved all objects created by object literals are instance of Object Constructor

// mark object also access the prototype methods of Object constructor
console.log(`mark.hasOwnProperty("name")`, mark.hasOwnProperty("name"));

// functions also instance of Object constructor
console.log(
  `PersonInheritance instanceof Object`,
  PersonInheritance instanceof Object
);

console.log(
  `johnInheritance.hasOwnProperty("name")`,
  johnInheritance.hasOwnProperty("name")
);

console.log(
  `johnInheritance.hasOwnProperty("city")`,
  johnInheritance.hasOwnProperty("city")
);

// why it is important?
const arr = [10, 20, 30, 40];
// this arr created by new Array constructor
console.log(arr)
// all the array methods are presented in prototype of Array constructor
