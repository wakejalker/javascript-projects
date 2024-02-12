let names = ["Chris", "Jim", "Sally", "Blake", "Paul", "John", "Courtney", "Carly"];

// TODO: Write a mapping function
// and pass it to .map() For each name in the array, map it to the first initial

let firstInitials = names.map(function (names) {
    for (let i = 0; i < names.length; i++) {
        return names[0][0];
    }
    });
console.log(firstInitials);

// // example from book 
// let nums = [3.14, 42, 4811];

// let timesTwo = function (n) {
//     return n*2;
// };

// let doubled = nums.map(timesTwo);

// console.log(nums);
// console.log(doubled);


// // check your understanding
// let nums = [3.14, 42, 4811];

// // TODO: write a mapping function and pass it to .map()
// let halved = nums.map(function (n) {
//     return n/2;
// });
// console.log(halved);
