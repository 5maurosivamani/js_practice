function* generator(arr) {
  let i = 0;
  while (i < arr.length) {
    yield arr[i];
    i++;
  }
}

const myArray = [1, 2, 3];

const gen = generator(myArray);

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
