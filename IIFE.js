/**
 * Immediately Invoke Function Expression - IIFE
 */

"use strict";

const greet = (function () {
  console.log("Have a nice day!");

  return 10;
})();

console.log("greet variable hold:", greet);

// IIFE
(function () {
  console.log("Hello world!");
})();

// Every IIFE ends with semicolon
(function () {
  console.log("Hello world!");
})();

/**
 * 1.Write a anonymous function expression with in the
 * parentheses
 * 2.Use another set of parentheses to execute the
 * function
 * 3.It's also ends with semicolon
 */

(function (name, timeOfDay) {
  console.log(`Good ${timeOfDay} ${name} , Welcome Back!`);
})("John", "Morning");

/**
 * IIFE - How it provides Data privacy
 */

// Developer 1
(function () {
  var firstName = "John";

  function greetings(name, timeOfDay) {
    console.log(
      `first function call: Good ${timeOfDay} ${name}, How are you doing today?`
    );
  }

  greetings(firstName, "Morning");
})();

// Developer 2
(function () {
  var firstName = "Merry";

  function greetings(name, timeOfDay) {
    console.log(
      `second function call: Good ${timeOfDay} ${name}, Have a nice day!`
    );
  }

  greetings(firstName, "Afternoon");
})();

// Developer 3
(function () {
  function greetings(name, timeOfDay) {
    console.log(`third function call: Good ${timeOfDay} ${name}, Have a fun!`);
  }

  greetings("Steve", "Evening");
})();
// last function definition override the previous one
