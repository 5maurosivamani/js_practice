// Strings
const stringData = "sssiivvvaamnnii";
// output is s3i2v3a2m1n2i2

// step 1: for of used -> iterate the character
// step 2: create a temporary variable -> previous
// step 3: create a counter variable -> count
// step 4: check previous === current -> count + 1 else 1
// step 5: create a output string -> output
// step 6: when previous !== current -> output += previous + count;

let previous = stringData.charAt(0);
(count = 0), (output = "");

for (char of stringData) {
  if (previous === char) {
    count++;
  } else {
    output += previous + count;
    count = 1;
    previous = char;
  }
}

output += previous + count;

console.log(output);

// Problem 2: Remove the vowels from the string
const name = "sivamani";
let result = "";

// const nameArray = name.split(""); // Time Complesity: n

const checkVowel = (char) => {
  switch (char.toUpperCase()) {
    case "A":
      return true;
    case "E":
      return true;
    case "I":
      return true;
    case "O":
      return true;
    case "U":
      return true;
    default:
      return false;
  }
};

// Time Complesity: n
// for (let i = 0; i < nameArray.length; i++) {
//   if (!checkVowel(nameArray[i])) {
//     result += nameArray[i];
//   }
// }

for (char of name) {
  result += checkVowel(char) ? "" : char;
} // Big O(n)

console.log(result);