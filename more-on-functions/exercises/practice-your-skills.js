//Create an anonymous function and set it equal to a variable.
let pirateSpeak = function (argument){
    if (typeof argument === Number){
        return argument * 3;
    } else if (typeof argument === 'string') {
        return "ARRR!";
    } else { 
        return argument;
    }
};
/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. 
*/
console.log(pirateSpeak("Test!")); // output: ARRR!
console.log(pirateSpeak(3)); // output: 9

/* Add to your code! Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/


let arr = ['Elocution', 21, 'Clean teeth', 100];

let mappedArr = arr.map(function(ele){
    return pirateSpeak(ele);
});

console.log(arr);