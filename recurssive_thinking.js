const user = {
  name: "John Doe",
  age: 30,
  address: {
    personal: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
      location: {
        lat: 40.7128,
        lng: -74.006,
      },
    },
    work: {
      company: "XYZ Corp",
      position: "Software Engineer",
      years: 3,
      location: {
        lat: 40.7128,
        lng: -74.006,
      },
    },
  },
};

function format(obj, parent) {
  for (let key in obj) {
    // console.log(typeof obj[key]);
    if (typeof obj[key] === "object") {
        format(obj[key], `${parent}.${key}`);
    } else {
      output[`${parent}.${key}`] = obj[key];
    }
  }
}

const output = {};

format(user, "user");

console.log(output);


// Steps for recursively thinking
// Step 1: write down the problem and write the output
// Step 2: Create the mental model for solving the problem (understand the problem, think all sonorous)
// Step 3: Run the model using dry run methods
// Step 4: Finally, write the solution in code
