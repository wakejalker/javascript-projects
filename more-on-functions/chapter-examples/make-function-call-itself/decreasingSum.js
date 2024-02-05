// function decreasingSum(integer) {
//    if (integer === 1){
//       return integer;
//    } else {
//       //call decreasingSum function again
//       return integer + (integer-1);
//    }
// }

// console.log(decreasingSum(5));
// // opt 1 return integer + (integer-1); incorrect. output: 9 / expected output: 15

// function decreasingSum(integer) {
//    if (integer === 1){
//       return integer;
//    } else {
//       //call decreasingSum function again
//       return integer + (decreasingSum(integer));
//    }
// }

// console.log(decreasingSum(5));
// // opt 2 return integer + (decreasingSum(integer)); is incorrect. threw some crazy error RangeErorr: Maximum call stack size exceeded WHOOPS 

function decreasingSum(integer) {
   if (integer === 1){
      return integer;
   } else {
      //call decreasingSum function again
      return integer + (decreasingSum(integer-1));
   }
}

console.log(decreasingSum(5));
// opt 3 return integer + (decreasingSum(integer-1)); correct. output: 15


// function decreasingSum(integer) {
//    if (integer === 1){
//       return integer;
//    } else {
//       //call decreasingSum function again
//       return decreasingSum(integer-1);
//    }
// }

// console.log(decreasingSum(5));
// // opt 4 return decreasingSum(integer-1); incorrect. output: 1 / expected output: 15
