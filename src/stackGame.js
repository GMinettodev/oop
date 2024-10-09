const { generateRandomNumberArray } = require("./generateRandomNumberArray");
const { getRandomInt } = require("./randomInt");
const { Stack } = require("./stackObject");

// Create the stacks
const stack1 = new Stack();
const stack2 = new Stack();
const stack3 = new Stack();

// Initialize the scores
let score1 = 0;
let score2 = 0;
let score3 = 0;

// Populate the stacks
for (let i = 0; i < 3; i++) {
  stack1.push(getRandomInt(1, 9));
  stack2.push(getRandomInt(1, 9));
  stack3.push(getRandomInt(1, 9));
}

// Each stack will now have 3 values, we can pop from all stacks safely.
for (let i = 0; i < 3; i++) {
  let v1 = stack1.pop();
  let v2 = stack2.pop(); // Using the correct stack variable
  let v3 = stack3.pop(); // Using the correct stack variable

  // Determine the highest score
  if (v1 > v2 && v1 > v3) {
    score1 += v1 + v2 + v3; // Accumulate score1
    console.log(1);
  } else if (v2 > v1 && v2 > v3) {
    score2 += v1 + v2 + v3; // Accumulate score2
    console.log(2);
  } else if (v3 > v1 && v3 > v2) {
    score3 += v1 + v2 + v3; // Accumulate score3
    console.log(3);
  } 
}

// Final scores output
console.log(
  `Final Scores: Player 1: ${score1}, Player 2: ${score2}, Player 3: ${score3}`
);
