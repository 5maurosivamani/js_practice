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
