console.log("hello");

// function expression

let names =["sri","dharan","luffy","madara"];

let greet =function(name){console.log(`hello ${name}`)};

greet(names); //output : hello sri,dharan,luffy,madara
names.map(greet); 
// output
// hello sri
// hello dharan
// hello luffy
// hello madara

// instead of function expression
// we can use arrow function
// arrow function is a shorthand for function expression
// it is used to define small functions

// arrow function example

console.log("using arrow function");
let female_characters = ["nami","maki","fubuki","makima"];

let greeting = (f_name) => {console.log(`hello ${f_name}`)};
female_characters.map(greeting);

hello nami
script.js:27 hello maki
script.js:27 hello fubuki
script.js:27 hello makima





