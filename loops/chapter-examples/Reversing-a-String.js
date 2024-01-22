let str = "blue";
let reversed = "";

for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
}
// reversing the order of the assignment statement to reversed + str[i] just spells blue
console.log(reversed);



// let strTest = 'Testing out a longer string.';
// let strTestReversed = "";

// for (let i = 0; i < strTest.length; i++) {
//     strTestReversed = strTest[i] + strTestReversed;
// }
// console.log(strTestReversed);
