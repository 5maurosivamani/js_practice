// Debouncing
let count = 0;

// Fetch Method
const fetch = function (e, ...args) {
  console.log("Fetching is called..", count++);
  console.log(e.value, args);             
};

// Debounce Method
const debounce = function (method, delay) {
  let timer;
  return function () {
    // receive the arguments and this
    const context = this;
    const args = arguments;

    // when next event is received then clear timer
    clearTimeout(timer);

    // call the method after the delay
    timer = setTimeout(function () {
      method.apply(context, args);
    }, delay);
  };
};

// handleKeyup method generates by debounce method
const handleKeyUp = debounce(fetch, 500);
