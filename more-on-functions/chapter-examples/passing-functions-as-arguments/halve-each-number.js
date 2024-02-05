// ----------- MAP EXAMPLES FROM BOOK -----------

// let nums = [3.14, 42, 4811];

// let timesTwo = function (n) {
//     return n*2;
// };

// let doubled = nums.map(timesTwo);

// console.log(nums);
// console.log(doubled);

// ---------- 
// has same output as code above, but mapping function is definted anonymously within the call to map 
// let nums = [3.14, 42, 4811];
// let doubled = nums.map(function (n){
//     return n*2;
// });

// console.log(doubled);

let nums = [3.14, 42, 4811];

// TODO: Write a mapping function
// and pass it to .map()
let halved = nums.map(function (n){
    return n/2;
});

console.log(halved);
