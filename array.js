const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// add a element to the array
array.push(10);

// remove the last element from the array

array.unshift(0);
console.log({ array });

array.shift();

const res = array.pop();
console.log({ res });

array.splice(1, 1, "a", "b");

console.log({ array });


