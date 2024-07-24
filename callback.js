function attachEventListener() {
  let count = 0;

  document.getElementById("click-me").addEventListener("click", function () {
    console.log("button clicked!", ++count);
  });
}


// attachEventListener();

function greet(name) {
  console.log(`Hello, ${name}!`);
}

function processUserInput(callback) {
  const name = prompt('Please enter your name.');
  callback(name);
}

// processUserInput(greet);


setTimeout(() => {
  console.log('Step 1');
  setTimeout(() => {
    console.log('Step 2');
    setTimeout(() => {
      console.log('Step 3');
      setTimeout(() => {
        console.log('Step 4');
        setTimeout(() => {
          console.log('Step 5');
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
