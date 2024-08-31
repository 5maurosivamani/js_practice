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
console.log(arr);
// all the array methods are presented in prototype of Array constructor

/*
  Class & Class Constructor

  what is class in javascript?

  Class in javascript to allow to create a blueprint and based on
  the blueprint we can instantiate Objects.

  Classes in javascript are different from other traditional classes
  in other object oriented languages like java and c++.

  Classes are Syntactic sugar of function constructor and 
  Prototypal inheritance. It is not a new concept in itself. 
*/

// Javascript classes are created by two ways
// class declaration -> class Person { ... }
// class expression -> const Person = class { ... }

class PersonClass {
  constructor(name, gender, birthYear) {
    this.name = name;
    this.gender = gender;
    this.birthYear = birthYear;
  }
  calculateAge() {
    const age = 2024 - this.birthYear;
    console.log(`${this.name} - Age: ${age}`);
  }
}

// explicitly inherit the greet function
PersonClass.prototype.greet = function () {
  console.log(`Hello, ${this.name}!`);
};

const johnClass = new PersonClass("John", "Male", 1978);
console.log(johnClass);
johnClass.calculateAge();
johnClass.greet();

// Remember:-
// 1.classes doesn't hoisted
// 2.classes are a first class citizens
// 3.classes are executed in strict mode

/*
  getters and setters method

  Accessor properties are methods that are gets or sets the value
  of an object's property.

  1.getter property -> read the property value
  2. setter property -> change the property value

  Encapsulation: Hiding the data from the outside world
  set and get the calculated value for a property
*/

let user = {
  name: "John",
  birthYear: 1990,
  annualSalary: 12000,
  get getAge() {
    return new Date().getFullYear() - this.birthYear;
  },
  set setSalary(newSalary) {
    if (newSalary < 0) {
      console.error("Salary can't be negative");
      return;
    }
    this.annualSalary = newSalary;
  },
};

console.log(user);
console.log(`Age: `, user.getAge);
user.setSalary = 13000;
console.log(user);

let User = class {
  constructor(name, password, role) {
    this.name = name;
    this.password = password;
    this.role = role;
  }

  set setPassword(newPassword) {
    if (newPassword.length < 8) {
      console.error("Password must be at least 8 characters long");
      return;
    }
    this.password = newPassword;
  }
};

const markUser = new User("Mark", "12345678", "Developer");

console.log(markUser);

markUser.setPassword = "123456";

console.log(markUser);

/*
  Static methods

  Static methods always attach to the class
  Instance methods always attach to the instances
*/
class PersonStatic {
  static age = 20;

  constructor(name) {
    this.name = name;
  }

  static getCount() {
    return PersonStatic.age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const johnStatic = new PersonStatic("John");
// access the instance method
johnStatic.greet();

// access the static method
console.log(PersonStatic.getCount());

console.log(johnStatic);

// static method with function constructor
function PersonFunctionConstructor(name, gender, birthYear) {
  this.name = name;
  this.gender = gender;
  this.birthYear = birthYear;
}

PersonFunctionConstructor.prototype.calculateAge = function () {
  const age = new Date().getFullYear() - this.birthYear;
  console.log(`${this.name} - Age: ${age}`);
};

// attach static method
PersonFunctionConstructor.greet = function () {
  console.log("Hello, my name is " + this.name + "!");
};

const johnFunctionConstructor = new PersonFunctionConstructor(
  "John",
  "Male",
  1980
);

console.log(johnFunctionConstructor);

PersonFunctionConstructor.greet();
// johnFunctionConstructor.greet();

// build in static methods in js
/**
 * Number.parseInt()
 * Number.isNaN()
 * Array.from()
 */

/**
 * Object.create() used to create prototypal inheritance
 *
 */
const PersonBluePrint = {
  calculateAge() {
    const age = new Date().getFullYear() - this.birthYear;
    console.log(`${this.name} - Age: ${age}`);
  },

  greet() {
    console.log(`Have a nice day!`);
  },

  init(name, gender, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
    this.gender = gender;
  },
};

const johnBluePrint = Object.create(PersonBluePrint);
johnBluePrint.name = "John";
johnBluePrint.birthYear = 1990;
johnBluePrint.gender = "Male";

console.log(johnBluePrint);
johnBluePrint.calculateAge();

const merryBluePrint = Object.create(PersonBluePrint, {
  name: {
    value: "merry",
  },
  birthYear: { value: 1995 },
  gender: { value: "Female" },
});

console.log(merryBluePrint);
merryBluePrint.calculateAge();

const markBluePrint = Object.create(PersonBluePrint);
markBluePrint.init("Mark", "Male", 1996);

console.log(markBluePrint);
markBluePrint.calculateAge();

/**
 * Inherits between function constructors
 */
// Parent function constructor
function Member(name, gender, birthYear) {
  this.name = name;
  this.gender = gender;
  this.birthYear = birthYear;
}

Member.prototype.calculateAge = function () {
  const age = new Date().getFullYear() - this.birthYear;
  console.log(`Member Name: ${this.name} - Age: ${age}`);
  return age;
};

const johnMember = new Member("John", "Male", 1996);

console.log(johnMember);
johnMember.calculateAge();

// child function constructor
function Employee(name, gender, birthYear, salary) {
  // Member(name, gender, birthYear) Regular function call
  // this keyword point to global window object
  Member.call(this, name, gender, birthYear);
  this.salary = salary;
}

Employee.prototype = Member.prototype;
// Employee.prototype = Object.create(Member.prototype);

Employee.prototype.calculateSalary = function () {
  console.log(`Employee Name: ${this.name} - Salary: ${this.salary * 12}`);
};

Employee.prototype.empDetails = function () {
  console.log(
    `Employee Name: ${this.name} - Gender: ${
      this.gender
    } - Age: ${this.calculateAge()}`
  );
};

const RameshEmployee = new Employee("Ramesh", "Male", 1996, 1000);

console.log(RameshEmployee);

RameshEmployee.calculateSalary();
RameshEmployee.empDetails();
RameshEmployee.calculateAge();

/**
 * Inheritance between classes.
 */
class MemberClass {
  constructor(name, gender, birthYear) {
    this.name = name;
    this.gender = gender;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  }
}

class EmployeeClass extends MemberClass {
  constructor(name, gender, birthYear, empId, salary) {
    super(name, gender, birthYear); // super method call before access this property
    this.empId = empId;
    this.salary = salary;
  }

  empDetails() {
    console.log(`Employee Name: ${this.name} - EmpId: ${this.empId}`);
  }

  empSalary() {
    console.log(`Employee Name: ${this.name} - Salary: ${this.salary * 12}`);
  }
}

const markEmployee = new EmployeeClass("Mark", "Male", 1990, 12001, 1000);

console.log(markEmployee);

markEmployee.empDetails();
markEmployee.empSalary();
markEmployee.calcAge();

/**
 * Inheritance using Object.create()
 */
// blueprint for Animal
const PersonObjectCreate = {
  calcAge() {
    console.log(`Age: ${new Date().getFullYear() - this.birthYear}`);
  },
  personInit(name, gender, birthYear) {
    this.name = name;
    this.gender = gender;
    this.birthYear = birthYear;
  },
};

const EmployeeObjectCreate = Object.create(PersonObjectCreate);
EmployeeObjectCreate.employeeInit = function (
  name,
  gender,
  birthYear,
  empId,
  salary
) {
  EmployeeObjectCreate.personInit.call(this, name, gender, birthYear);
  this.empId = empId;
  this.salary = salary;
};

// EmployeeObjectCreate.employeeInit("John", "Male", 1990, 1000);

const markEmployeeObject = Object.create(EmployeeObjectCreate);

markEmployeeObject.employeeInit("Mark", "Male", 1990, 10012, 1000);

console.log(markEmployeeObject);

markEmployeeObject.calcAge();

/**
 * Public and private properties in class
 */

class IncrementCounter {
  #value = 0; // private property
  counter = 0; // public property

  // constructor() {}

  increment() {
    this.counter++;
    this.#value++;
  }

  get getValue() {
    this.#greet();
    return this.#value;
  }

  // Private Method
  #greet() {
    console.log("Hello from private method");
  }
}

const counter = new IncrementCounter();

console.log(counter);

console.log("private: ", counter.getValue);
console.log("public:", counter.counter);

counter.increment();

console.log("private: ", counter.getValue);
console.log("public:", counter.counter);

// counter.greet(); private method cannot access from outside world
