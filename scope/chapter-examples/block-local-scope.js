// function myFunction() {
//     let i = 10;
//     return 10 + i;
// }
// // // console.log(i); // ReferenceError: i is not defined
// console.log(myFunction());
// // don't think this is correct, this returns 10 + 1 and I want to access i? But as far as I know I can't without redefining/refactoring it..

let i = 10;
function myFunction() {
    return 10 + i;
}
console.log(i); // Output: 10
console.log(myFunction()); // Output: 20
