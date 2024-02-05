const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

// let strSlice = str.slice(3) + str.slice(0, 3);
// console.log(strSlice); // output: nchCodeLau

let userInput = input.question("Please enter number of letters to be relocated: ");


if (userInput > str.length || userInput < 1) {
    console.log(`Error, input (${userInput}) longer than string! Defaulted to moving 3 letters.`);
    userInput = 3;
}

let strSlice = str.slice(userInput) + str.slice(0, userInput);





//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`The original word ${str} has been modified to: ${strSlice}`);


//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
// see code at top

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
// see code above 