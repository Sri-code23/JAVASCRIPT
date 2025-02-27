// The foreach loop in JavaScript is used to iterate over the elements of an array or other iterable objects.
// It executes a block of code for each element in the array.

const msg = document.getElementById("output");

// function printNumbers(number, index, array) {
//     // console.log(`Number: ${number}, Index: ${index}, Array: ${array}`);
//     msg1.innerHTML += `Number: ${number}, Index: ${index}, Array: ${array} <br><br>`;
// }
// let a = [1, 2, 3 ,4, 5, 6 ,7 , 8, 9, 10];
// a.forEach(printNumbers);

// 
function uppercase(item, index, array) {
    msg.textContent += `${item.toUpperCase()},  `;
    msg.innerHTML += `<br> index of ${item} is ${index} <br>, `;
}

const fruits = ["apple", "banana", "cherry"];
for(let f of fruits){
    msg.textContent += `"${f}", `;
}
msg.innerHTML += `<br><br>`;
fruits.forEach(uppercase);

// The function printNumbers takes three parameters: number, index, and array.
// The console.log function is used to print the values of the parameters to the console.
// The function is called with the numbers 1, 2, and 3, and th

// The array a is defined with the numbers 1 through 6.

// The function printNumbers is called for each element in the array a.
// The function is called with the numbers 1, 2, 3, 4, 5, and 6, and the array a. 
// The output of the program will be the values of the parameters number, index, and array for each element in the array a.
// The output will be:
//  Number: 1, Index: 0, Array: 1,2,3,4 ,5,6, 
// Number: 2, Index: 1, Array: 1, 2,3,4,5,6,
//  Number: 3, Index: 2, Array: 1,2,3,4,5,6,
//  Number: 4, Index: 3, Array: 1,2,3,4,5,6
// Number: 5, Index: 4, Array: 1,2,3, 4,5,6 





// // Example 1: Using foreach to iterate over an array
// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function(num) {
//   console.log(num);
// });

// // Example 2: Using foreach with arrow function
// let names = ['John', 'Alice', 'Bob'];
// names.forEach(name => console.log(name));

// // Example 3: Using foreach with object
// let person = {
//   name: 'John',
//   age: 30,
//   city: 'New York'
// };
// Object.keys(person).forEach(key => console.log(`${key}: ${person[key]}`));

// // Example 4: Using foreach with array of objects
// let students = [
//   { name: 'John', age: 20 },
//   { name: 'Alice', age: 22 },
//   { name: 'Bob', age: 21 }
// ];
// students.forEach(student => console.log(`Name: ${student.name}, Age: ${student.age}`));

