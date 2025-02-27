// strict equality operator 
/*
used to check if two values are equal and of the same data type.
it returns true if both values are equal and of the same data type, otherwise it returns fals
console.log(5 === 5); // true

console.log(5 === '5'); // false
// loose equality operator
used to check if two values are equal, regardless of their data type.
it returns true if both values are equal, otherwise it returns false
console.log(5 == '5'); // true
*/

// strict inequality operator example 
// if (a === b) {
//     console.log("a and b are equal");
// } else {
//     console.log("a and b are not equal");
// }

const h = document.querySelector(".strict");

const a = 2;

if(a === 2) {
    // console.log("a and 2 are equal");
    h.textContent = "number datatype and the value are matched";
} 
else if(a === "2"){
    // console.log("a and 2 are not equal");
    h.textContent = "string data type and value are matched";
}

else{
    h.textContent = "either the datatype or the values are not matched";
}






