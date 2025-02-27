//function declaration

// example 1
// function greet(name){
//     // console.log("hello ", name);
//     console.log(`hello, ${name}`);
// }
// greet("sri through function");

// // example 2
// let numbers = [1,2,3,4,5,6,7,8,9];
// function evennos(){
//     let even = numbers.filter(num => num % 2 == 0);
//     console.log(even);
// }
// evennos(numbers);

//////////////////

// function expression
// instead of declaring the function and calling it we can dirctly pass the function expression 
// as an argument to another function

// example 1
console.log("Function expression");

let name = function(){
    console.log("hello from function expression");
}
name("sri");

// example 2 ///////////////////////////
let all_numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
// console.log(all_numbers);
function even_no(num){
    if(num %2 == 0){
        return num;
    }
}
let even_number = all_numbers.filter(even_no);
console.log(even_number);
/////////////////////////////

// instead of do this ⬆ we can do this ⬇
let even_numbers = all_numbers.filter(function(num){
    if(num %2 == 0){
        return num;
    }
})
console.log(even_numbers);

////////////////////
