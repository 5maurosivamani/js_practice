const name = {
  firstName: "John",
  lastName: "Doe",
  printFullName(city, country) {
    console.log(`${this.firstName} ${this.lastName}, ${city} ${country}`);
  },
};

name.printFullName("Lasantos", "USA"); // Output: John Doe

const person = {
  firstName: "Jaya",
  lastName: "Venkatesh",
};

// this variable will be received the person object then 2, 3 rd and then arguments are passed to the printFullName function
name.printFullName.call(person, "Vellapallam", "India");

// Only different is 2nd argument is array
name.printFullName.apply(person, ["vellapallam", "India"]);

// It doesn't call the printFullName function just assigning the arguments and returning a new function
const print = name.printFullName.bind(person, "Vellapallam", "India");

print();

const printMyName = function (city, state) {
  console.log(`${this.firstName} ${this.lastName} ${city} ${state}`);
};

const printFullName = printMyName.bind(person);

printFullName("chennai", "Tamil Nadu");

// polyfill for bind method
Function.prototype.myBind = function (obj, ...args) {
  const fn = this;

  console.log(...args);

  return function (...args2) {
    fn.call(obj, ...args, ...args2);
  };
};

const newPrint = printMyName.myBind(person);

newPrint("chennai", "Tamil Nadu");
