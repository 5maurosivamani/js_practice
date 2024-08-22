// Two different way to do function currying:
// 1.Closure
// 2.bind

// Closure version
const calc = function (operator) {
  return function (a, b) {
    switch (operator) {
      case "+":
        console.log(a + b);
        break;
      case "-":
        console.log(a - b);
        break;
      case "*":
        console.log(a * b);
        break;
      case "/":
        console.log(a / b);
        break;
      default:
        console.log("Invalid operator");
    }
  };
};

const add = calc("+");
const sub = calc("-");
const mul = calc("*");
const div = calc("/");

add(2, 3);
sub(5, 2);
mul(2, 3);
div(4, 2);

// another example for closure
const another = function (a) {
  return function (b) {
    return function (c) {
      console.log("res: ", a + b + c);
    };
  };
};

const addThree = another(2)(2);

addThree(3); // Outputs: 7

// Bind version
function multiply(x, y) {
  console.log(x * y);
}

const double = multiply.bind(this, 2);
const dribble = multiply.bind(this, 3);

double(3);
double(4);

dribble(1);
dribble(10);

// sum(1)(2)(3)(4) => output: 10
// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return function (d) {
//         console.log({ a, b, c, d });
//         return a + b + c + d;
//       };
//     };
//   };
// }

// optimize version
function sum(a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    }

    return a;
  };
}

// es6 version
const es6Sum = (a) => (b) => b ? sum(a + b) : a;

console.log(`sum(1)(2)(3)(4)() => ${sum(1)(2)(3)(4)()}`);
console.log(`es6Sum(1)(2)(3)(4)() => ${es6Sum(1)(2)(3)(4)()}`);

// variable declarations
let count = 1;
const exit = 6;

// function expression assign to variable
const summ = (a) => (count === exit ? a : (b) => summ(a + b, count++));

// call the function and log the results
console.log(`summ(1)(2)(3)(4)(5)(6) => ${summ(1)(2)(3)(4)(5)(6)}`);
