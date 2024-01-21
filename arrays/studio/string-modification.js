const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
// let slice = str.replace('Lau','');
//let slice = str.split('').splice([0][3]).push('Lau');
// 11????
//let slice = str.split('').splice([0],[3],'').join('');
//gives Lau
// let slice = str.split('').slice(3, 10).push('L', 'a', 'u').join('');
let strSlice = str.slice(3) + "Lau";
// console.log(strSlice);

// slice method and concatenation




//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`Original string: ${str}. Modified string: ${strSlice}`);
// console.log(str.length);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let userInput = input.question("Please enter number of letters to be relocated: ");


//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if (userInput > str.length) {
    console.log(`Error, input longer than word!`);
    str.slice(3);
}
// unsure if this is the solve, to be honest! 