function iterator(arr) {
  let index = 0;
  let length = arr.length;

  return {
    next() {
      if (index < length) {
        return { value: arr[index++], done: false };
      } else {
        return { done: true };
      }
    },
  };
}

const myArray = [1, 2, 3];

const iteratorObj = iterator(myArray);

console.log(iteratorObj.next()); // { value: 1, done: false }

console.log(iteratorObj.next()); // { value: 2, done: false }

console.log(iteratorObj.next()); // { value: 3, done: false }

console.log(iteratorObj.next()); // { done: true }
