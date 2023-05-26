const fs = require("fs");

function FindPairs(file, objetive) {
  //define Variables
  const pairs = [];
  const numMap = {};

  //Read File
  const numbers = fs.readFileSync(file, "utf-8").split("\n");

  //Searching pairs
  for (let i = 0; i < numbers.length; i++) {
    const num = parseInt(numbers[i]);

    const complement = objetive - num;

    if (complement in numMap) {
      pairs.push([num, complement]);
    }

    numMap[num] = true;
  }

  return pairs;
}

// Test
const file = "./Code/numbers.txt";
const objetive = 12;
const foundPairs = FindPairs(file, objetive);

// show in console
for (const par of foundPairs) {
  console.log("+", par[0], ",", par[1]);
}
