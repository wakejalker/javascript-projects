let tortoiseOne = {
   species: "Galapagos Tortoise",
   name: "Pete",
   weight: 919,
   age: 85,
   diet: ["pumpkins", "lettuce", "cabbage"]
};

// Using a for..in loop, iterate through each property in the tortoiseOne object and print the value to the console.

for (item in tortoiseOne) {
   console.log(item + ", " + tortoiseOne[item]);
}


let giraffe = {
   species: "Reticulated Giraffe",
   name: "Cynthia",
   weight: 1500,
   age: 15,
   diet: "leaves"
 };

 function birthday(animal) {
     animal.age = animal.age + 1;
     return animal;
 }

 console.log(giraffe.age);

 birthday(giraffe);

 console.log(giraffe.age);