/*****************************************
 * Strict Mode in JavaScript
 */

"use strict";
// it's allows to avoid any accidental errors
// use strict is always place in the first line of the code

// undeclared variables
firstName = "John";

// misspelled on variable name was accepted
let isEligibleForVote = false;
let isFullAge = true;

if (isFullAge) {
  isEligibleforVote = true;
  // isEligibleForVote = true;
}

console.log(isEligibleForVote);

// Duplicate params
function greet(param, param) {
  console.log(param, param);
}

greet("Hello", "World");

// Reserved keywords
let interface = true;
