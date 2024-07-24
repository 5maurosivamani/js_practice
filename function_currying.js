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
