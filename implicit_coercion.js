function log(output) {
  console.log(output);
}

function checkFalse(res) {
  return res ? true : false;
}

// Implicitly Coercion
log(1 + "1");

log(3 * "3");

log(true + true);
log(10 - true);

log(10 - true - true);

const foo = {
  valueOf: () => 6,
};

log(10 - foo);
log(3 * foo);
log(3 + 2);

const bar = {
  toString: () => "Hello World",
};

log(bar + 1);

log(4 * []);
log(4 * [2]);
log(4 + [2]);
log(4 + [2, 6, 7]);
log(4 - [2]);
log(4 * [2, 3]);

log("string" ? true : false);
log(undefined ? true : false);

log(`\n\n`);

//  Non Numeric values in Numeric explogsion
log(3 * "3"); // 3 * 3
log(3 * Number("3")); // 3 * 3
log(Number("5")); // 5

log(Number("1.")); // 1
log(Number("1.34")); // 1.34
log(Number("0")); // 0
log(Number("012")); // 12

log(Number("1,")); // NaN
log(Number("1+1")); // NaN
log(Number("1a")); // NaN
log(Number("one")); // NaN
log(Number("text")); // NaN

log(`\n\n`);

// Object
log("name" + {});

const foo1 = {
  toString: () => "I am Foo",
};

log("Hello, " + foo1);

log({}.toString());

log(`\n\n`);

// Array
log([1, 2, 3, 4, 5, 6].toString());
log([1, 2, 3, 4, 5, 6].join());
log([].toString());

log("me" + [1, 2, 3]);

log(4 * []); // 0
log(4 / [2]); // 2

// //similar to
log(4 * Number([].toString()));
log(4 * Number(""));
log(4 * 0);

log(4 / Number([2].toString()));
log(4 / Number("2"));
log(4 / 2);

log(`\n\n`);

// true false
log(Number(true));
log(Number(false));
log(Number(""));

log(4 + true); // 5
log(3 * false); // 0
log(3 * ""); // 0
log(3 + ""); // "3"

// value of method
const fooTwo = {
  valueOf: () => 10,
};

log(3 + fooTwo); // 13

const fooThree = {
  toString: () => "Hello",
};

log(3 + fooThree); // "3Hello"

const fooFour = {
  valueOf: () => 10,
  toString: () => "World",
};

log("hello " + fooFour);

const two = Number("2");

log(two.valueOf()); // "2"

log(`\n\n`);

// Falsy and Truthy
log(checkFalse(false));
log(checkFalse(undefined));
log(checkFalse(0));
log(checkFalse(null));
log(checkFalse(NaN));
log(checkFalse(-0));
log(checkFalse(""));
log(`\n\n`);

// Truthy
log(checkFalse(-1));
log(checkFalse("0"));
log(checkFalse(["0"]));
log(checkFalse({}));
log(checkFalse([]));

log(NaN === NaN); // false
log(undefined === undefined);

log(Number.isNaN(NaN)); // true
log(Number.isNaN("hello")); // false
log(Number.isNaN("2")); // false
log(Number.isNaN("2")); // false

log(isNaN("name"));
log(isNaN("1"));

const coerceThenCheckNaN = (val) => {
  const coercedVal = Number(val);
  log({ val, coercedVal });
  return coercedVal !== coercedVal ? true : false;
};

log(`\n\n`);

log(coerceThenCheckNaN("1a")); // true
log(coerceThenCheckNaN("1")); // false
log(coerceThenCheckNaN("as")); // true
log(coerceThenCheckNaN(NaN)); // true
log(coerceThenCheckNaN(10)); // false
