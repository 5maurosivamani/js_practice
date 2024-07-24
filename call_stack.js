function recursive(n) {
  if (n >= 10347) return;
  console.log("Hello, World! ", n);
  recursive(n + 1);
}

// recursive(1);

function outerFunction(){
  return 2;
}

function innerFunction() {
  console.log(outerFunction());

  throw new Error("Inner function Error occurred");
}


function callstack_fun(){
  innerFunction();
}

callstack_fun();
