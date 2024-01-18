let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
// HUH?! ohh.
console.log(str.split());
// doesn't appear to do anything
console.log(str.split('e'));
//deleted e's and split into separate strings where they were
console.log(str.split(' '));
//split string at spaces
console.log(str.split(''));
//split string at every character

//2) Use the join method on the array to identify the purpose of the parameter inside the ().
console.log(arr.join());
// doesn't do anything
console.log(arr.join('a'));
// joins the separate strings together with 'a' in between each
console.log(arr.join(' '));
// joins the strings together with spaces
console.log(arr.join(''));
// joins them all together with no whitespace

//3) Do split or join change the original string/array?
console.log(arr);
console.log(str);
// no! 

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
console.log(cargoHold.split(',').sort().join(','));
// I got stuck after splitting and had to look at the results :( didn't realize I could combine them like that!)