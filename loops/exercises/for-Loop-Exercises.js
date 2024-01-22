/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */

  /*  
  // a.
  for (let i = 0; i < 21; i++) {
    console.log(i);
  }
  */
  
  // b.
  /*
  for (let i = 3; i <= 29; i + 2) {
    console.log(i);
  }
  // attempt 1 = infinite loop
  for (let i = 3; i <= 29; i+=2) {
    console.log(i);
  }
  // attempt 2 = success! 
  */

  //c. 
  /*
  for (let i = 12; i >= -14; i-=2) {
    console.log(i);
  }
  */

  /*
  //d. 
  for (let i = 50; i > 20; i--) {
    if (i % 3 === 0) {
      console.log(i);
    }
  }
  // I think that's working? 
  */


// Exercise #2: 
// Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].
let str = "LaunchCode";
let myArray = [1, 5, 'LC101', 'blue', 42];
let strReversed = ""

// Construct ``for`` loops to accomplish the following tasks:
  // a. Print each element of the array to a new line.
  // b. Print each character of the string - in reverse order - to a new line. */ 

  /*
  //a.
  for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
  }

  //b.
  for (let i = 0; i < str.length; i++) {
    strReversed = str[i] + strReversed;
  }
  console.log(strReversed);
  // this reverses the whole thing! i need to print each character to a new line... HOW?! 
  */

/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */

  let newArray = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
  let evenArray = [];
  let oddArray = [];

//even array 
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] % 2 === 0) {
      evenArray.push(newArray[i]);
    }
  }
  console.log(`Even Number Array: ${evenArray}`);

//odd array 
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] %2 !== 0) {
      oddArray.push(newArray[i]);
    }
  }
  console.log(`Odd Number Array: ${oddArray}`);

  //WAHOo!!!!!

  // checking solutions... 
  // a1 worked for me even though I had 21 instead of 20 hmm