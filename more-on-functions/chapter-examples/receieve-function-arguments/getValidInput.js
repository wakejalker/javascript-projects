const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

// TODO 1: write a validator 
// that ensures input starts with "a"
let startsWithA = function(userInput) {
  if (userInput.includes('a')) {
    return true;
  } return false;
}

// console.log(getValidInput('Create a password: ', startsWithA))

// TODO 2: write a validator 
// that ensures input is a vowel

// Be sure to test your code!
// let includesVowel = function(userInput) {
//   // let vowels = ["a","e","i","o","u"]
//   if (userInput.includes('a' || 'e' || 'i' || 'o' || 'u')) {
//     return true;
//   } return false;
// }
// // .includes doesn't work like that...need to rethink

let includesVowel = function(userInput) { 
  if (userInput.includes("a") || 
      userInput.includes("e") ||
      userInput.includes("i") ||
      userInput.includes("o") ||
      userInput.includes("u") ||
      userInput.includes("y")) {
      return true;
  } else {
      return false;
  }
};

// i'm sure there is an easier way to have done that but this is all i could think of. i keep wanting to create an array of vowels but i'm not sure how i'd use it

console.log(getValidInput('Create a password: ', includesVowel))
