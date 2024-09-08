function* generator(arr) {
  let i = 0;
  while (i < arr.length) {
    yield arr[i];
    i++;
  }
}

const myArray = [1, 2, 3];

// const gen = generator(myArray);

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

function* generateId() {
  let id = 1;
  while (true) {
    const increment = yield id;

    if (increment != null) {
      id += increment;
    } else {
      id++;
    }
  }
}

const genId = generateId();

console.log(genId.next());
console.log(genId.next());
console.log(genId.next(6));
console.log(genId.next());
console.log(genId.next());
console.log(genId.next(2));

function* fibonacciSequence() {
  let a = 0,
    b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const fibonacciIterator = fibonacciSequence();

// Let's print the first 10 Fibonacci numbers
for (let i = 0; i < 10; i++) {
  console.log(fibonacciIterator.next().value);
}
