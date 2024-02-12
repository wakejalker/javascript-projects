const input = require('readline-sync');

function hello(name) {
    console.log('Hello,', name);
    name = 'Ruth';
    return doubleName(name);
}

function doubleName(name){
    console.log(name+name);
    return name+name;
}

let name = input.question("Please enter your name: ");

hello(name);
doubleName(name);
console.log(name);

// value of name on line 4: Jake (user input)
// value of name on line 10: RuthRuth (takes name from hello())
// value of name on line 16: Jake (user input)
// value of name on line 17: JakeJake (user input)
// value of name on line 18: Jake (user input)