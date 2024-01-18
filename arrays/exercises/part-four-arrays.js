let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

//Explore the methods concat, slice, reverse, and sort to determine which ones alter the original array.

//1) Print the result of using concat on the two arrays. Does concat alter the original arrays? Verify this by printing holdCabinet1 after using the method.
holdCabinet1.concat(holdCabinet2);
console.log(holdCabinet1);
// does not alter original array! 

//2) Print a slice of two elements from each array. Does slice alter the original arrays?
console.log(holdCabinet1.slice(2, 4));
console.log(holdCabinet2.slice(1,3));
console.log(holdCabinet1);
console.log(holdCabinet2);
// slice does not alter original array! 
console.log('-----------------')
//3) reverse the first array, and sort the second. What is the difference between these two methods? Do the methods alter the original arrays?
holdCabinet1.reverse();
console.log(holdCabinet1);
holdCabinet2.sort();
console.log(holdCabinet2)
// the difference is sort arranges the items in the array in "increasing" order
// these methods appear to alter the original arrays.