// Example
function doThing() {}

console.log(doThing.prototype);

// Create a animal Object
function Animal(name, energy) {
  let animal = Object.create(Animal.prototype);

  animal.name = name;
  animal.energy = energy;

  return animal;
}

Animal.prototype.eat = function (amount) {
  console.log(`${this.name} is eating.`);
  this.energy += amount;
};

const leo = new Animal("leo", 20);

console.log({ leo });

leo.eat(10);

console.log({ leo });

// Pseudoclassical Instantiation

function AnimalOne(name, energy) {
  this.name = name;
  this.energy = energy;
}

const leoOne = Animal("Leo", 7);
const snoopOne = new Animal("snoop", 7);
console.log(leoOne.name); // undefined
console.log(snoopOne.name); // undefined

// Class Version
class AnimalClass {
  constructor(name, energy) {
    this.name = name;
    this.energy = energy;
  }

  static log(message) {
    console.log(message);
  }

  eat(amount) {
    console.log(`${this.name} is eating.`);
    this.energy += amount;
  }

  sleep(amount) {
    console.log(`${this.name} is sleeping.`);
    this.energy += amount;
  }

  play(amount) {
    console.log(`${this.name} is playing.`);
    this.energy -= amount;
  }
}

AnimalClass.prototype.pray = function (amount) {
  console.log(`${this.name} is praying.`);
  this.energy += amount;
};

const leoClass = new AnimalClass("leo", 25);

console.log({ leoClass });

leoClass.eat(10);

console.log({ leoClass });

leoClass.play(10);

console.log({ leoClass });

leoClass.pray(10);

console.log({ leoClass });

console.log("animal class prototype", AnimalClass.prototype);

AnimalClass.log("animal class static methods");

// function version static key how works
function AnimalFunction(name, energy) {
  this.name = name;
  this.energy = energy;
}

// way to create static method
AnimalFunction.play = function (amount) {
  console.log(`${amount} energy will reduce while animal is playing...`);
};

AnimalFunction.prototype.eat = function (amount) {
  console.log(`${this.name} is eating...`);
  this.energy += amount;
};

const tiger = new AnimalFunction("Tiger", 100);

console.log(tiger);

tiger.eat(20);

AnimalFunction.play(20); // This way to call static methods

console.log("tiger=", tiger);

console.log(Object.getPrototypeOf(tiger));

// check Object.getPrototypeOf(leo) and AnimalFunction.prototype both are same
console.log(Object.getPrototypeOf(tiger) === AnimalFunction.prototype);

// print instance constructor
console.log(tiger.constructor);

// for in method to log the property and value
for (let key in tiger) {
  console.log(`Key: ${key}. Value: ${tiger[key]}`);
}

// hasOwnProperty
for (let key in tiger) {
  if (tiger.hasOwnProperty(key)) {
    console.log(`Key: ${key}. Value: ${tiger[key]}`);
  } else {
    console.log("no property", key);
  }
}

console.log("name", tiger.hasOwnProperty("name"));
console.log("energy", tiger.hasOwnProperty("energy"));
console.log("eat", tiger.hasOwnProperty("eat")); // prototype function not own property

// object instanceof method using
console.log("tiger instanceof AnimalFunction", tiger instanceof AnimalFunction);

console.log("tiger instanceof Dummy fn(){}", tiger instanceof function () {});

// new keyword
function NewFunction() {
  console.log(this);
  console.log(this instanceof NewFunction);
}

NewFunction();

new NewFunction();

// arrow function check new keyword
const ArrowFunction = () => {
  console.log("Hello World");
};

// new ArrowFunction();
console.log(ArrowFunction.prototype);

// __proto__ property
function MyFunction() {
  this.name = "MyFunction";
}

const MyObject = {
  name: "MyObject",
};

const MyArray = ["a", "b", "c", "d", "e"];

console.log("__", MyFunction.__proto__.__proto__.__proto__);
console.log("__", MyObject.__proto__.__proto__);
console.log("__", MyArray.__proto__.__proto__.__proto__);

// prototypal inheritance
const object = {
  name: "Sivamani",
  city: "Nagapattinam",
};

MyObject.__proto__ = object;

console.log(MyObject.__proto__);

console.log(MyObject.name, MyObject.city);
