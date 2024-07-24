// map
Array.prototype.mapp = function (cb) {
  const output = [];

  for (let i = 0; i < this.length; i++) {
    output.push(cb(this[i], i));
  }

  return output;
};

// filter
Array.prototype.filtering = function (cb) {
  const output = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i)) {
      output.push(this[i]);
    }
  }

  return output;
};

// reduce
Array.prototype.reducing = function (cb, accumulator) {
  for (let i = 0; i < this.length; i++) {
    accumulator = cb(accumulator, this[i], i);
  }

  return accumulator;
};

// find
Array.prototype.finding = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i)) {
      return this[i];
    }
  }

  return -1;
};

let arr = [1, 2, 3, 4, 5];
let arr2 = [
  {
    name: "John",
    age: 25,
  },
  {
    name: "Alice",
    age: 30,
  },
  {
    name: "Bob",
    age: 20,
  },
  {
    name: "Charlie",
    age: 35,
  },
];

// const result = arr.mapp((item, index)=>{
//     return item * 2;
// }); // Outputs: 1, 2, 3, 4, 5

// const result = arr.filtering((item) => item % 2 === 0);

// console.log(result);

const output = arr.reducing((max, curr) => {
  return Math.max(max, curr);
}, 0);

console.log(output);

console.log(arr2.finding((item) => item.name === "Charlie"));

let res = arr2.reducing((acc, curr) => {
  if(curr.age < 26){
    acc.push(curr.name);
  }
  return acc;
}, []);

console.log(res);
