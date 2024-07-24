const promises = [];

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // console.log("Log: Promise 1 resolved");
    // resolve("Promise 1 resolved");
    reject("Promise 1 rejected");
    console.log("Log: Promise 1 rejected");
  }, 6000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // console.log("Log: Promise 2 resolved");
    // resolve("Promise 2 resolved");
    reject("Promise 2 rejected");
    console.log("Log: Promise 2 rejected");
  }, 1500);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // console.log("Log: Promise 3 resolved");
    // resolve("Promise 3 resolved");
    reject("Promise 3 rejected");
    console.log("Log: Promise 3 rejected");
  }, 1000);
});

Promise.any([p1, p2, p3])
  .then((res) => {
    console.log("output: ", res);
  })
  .catch((err) => {
    console.error(err);
    console.log(err.errors);
  });
