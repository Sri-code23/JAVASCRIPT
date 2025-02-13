const output1 = document.getElementById("output1");
const output2 = document.getElementById("output2");
const output3 = document.getElementById("output3");


// map() - returns a new array with the results of applying 
// the provided function on every element in this array.
function greet(name){
    // output1.innerHTML += name + `<br>`;
}

let users = ["sri", "kuif", "luffy", "madara"];
users.map(greet);
// greet(users)





// filter() - returns a new array with all elements that
// pass the test implemented by the provided function.
function evenify(num){
    if(num % 2 == 0){
        // output2.innerHTML += num + `<br>`;
    }
}

let num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// evenify(50);
num.filter(evenify);





// reduce() - returns the accumulated result of applying 
// the provided function on every element in this array.
function sumify(previous,num){
    return previous + num;
}
// sumify(50);
let numbers = [1,2,3];
let noop = numbers.reduce(sumify, 0 );
// console.log(numbers.reduce(sumify, 0));
output3.textContent = noop ;




