const log = console.log;

let person = {
  id: 1,
  name: "John Doe",
};

let list = [person];

// list[0] = null;
person = null;

// list and person are strong references

log(list);
log(person);

// Weak references - Weak Set and Weak Map.

// Set - Unique, loop through, strong references, any datatype
// WeakSet - unique, not iterable, weak references, object only
const weakSet = new WeakSet();

let son = {
  id: 2,
  name: "Jane Doe",
};

let daughter = {
  id: 3,
  name: "Emily Doe",
};

weakSet.add(son);
weakSet.add(daughter);

log("son: ", weakSet.has(son));
log("daughter: ", weakSet.has(daughter));

son = null;

log("son: ", weakSet.has(son));
log("daughter: ", weakSet.has(daughter));

// Map - key value pair, unique, remember the order, keys are object, Strong References
// Weak map - not iterable, weak references

const weakMap = new WeakMap();

let raj = {
  id: 4,
  name: "Raj Doe",
};

let rashmika = {
  id: 5,
  name: "Rashmika Doe",
};

weakMap.set(raj, "red");
weakMap.set(rashmika, "purple");

log("raj: ", weakMap.has(raj));
log("rashmika: ", weakMap.has(rashmika));

raj = null;

log("raj: ", weakMap.has(raj));
log("rashmika: ", weakMap.has(rashmika));