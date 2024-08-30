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

const merry = new Person('Merry', 'Female', 2003);
console.log(merry);

const steve = new Person('Steve', 'Male', 1999);
console.log(steve)

steve.calculateAge();
