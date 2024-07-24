const createPromise = (duration, param) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (duration <= 0) {
        reject("Time out!");
      } else if (param) {
        resolve(param);
      } else {
        resolve(`Promise created after ${duration} seconds`);
      }
    }, duration * 1000);
  });
};

async function test_async() {
  console.log("Testing async");

  const val1 = await createPromise(6);
  console.log(val1);

  const val2 = await createPromise(8, val1);
  console.log(val2);
}

test_async().catch((err) => {
  console.log("Error 2", err);
});
