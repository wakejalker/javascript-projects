//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.


//1) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.
element1 = ['hydrogen', 'H', 1.008]
element2 = ['helium', 'He', 4.003]
element26 = ['iron', 'Fe', 55.85]

//2) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.
table = [];
table.push(element1);
table.push(element2);
table.push(element26);
// can also do this like: table.push(element1, element2, element3);
console.log(table);

//3) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).
console.log(table[1]);
console.log(table[1][1]);

//4) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.
console.log(`mass of element: ${table[0][2]}`);
console.log(`name of element: ${table[1][0]}`);
console.log(`symbol for element: ${table[2][1]}`);

//5) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.
 
// didn't complete this part before class
// in class: add another array to the arrays is all i need to do one big array with multiple arrays in it 

