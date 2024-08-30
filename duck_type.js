class Duck {
  type() {
    console.log("🦆".repeat(3));
  }
}

class Cat {
  type() {
    console.log("🐈".repeat(3));
  }
}

const duck = new Duck();
const cat = new Cat();

const makeDucksType = (possibleDuckImposter) => possibleDuckImposter.type();

[duck, cat].forEach((obj) => makeDucksType(obj));
