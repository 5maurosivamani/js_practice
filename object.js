function Animal(name, energy) {
  let animal = {};
  animal.name = name;
  animal.energy = energy;

  animal.eat = function (amount) {
    console.log(`${this.name} is eating.`);
    this.energy += amount;
  };

  animal.sleep = function (length) {
    console.log(`${this.name} is sleeping.`);
    this.energy += length;
  };

  animal.play = function (length) {
    console.log(`${this.name} is playing.`);
    this.energy -= length;
  };

  return animal;
}

const leo = Animal("Leo", 7);
const snoop = Animal("Snoop", 10);

console.log({ "leo energy": leo.energy });

leo.eat(10);

console.log({ "leo energy": leo.energy });

leo.sleep(10);

console.log({ "leo energy": leo.energy });

leo.sleep(10);

console.log({ "leo energy": leo.energy });

console.log({ "snoop energy": snoop.energy });

snoop.play(3);

console.log({ "snoop energy": snoop.energy });


