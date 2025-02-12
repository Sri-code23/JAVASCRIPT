// Callback in JavaScript
// A callback is a function passed as an argument to another function

const msg1 = document.getElementById("output1");
const msg2 = document.getElementById("output2");
const msg3 = document.getElementById("output3");

function greet(name, callback){
    msg1.textContent = "Hello , " + name + " !";
    callback(name, greet3);
}

function greet2(name, callbac){
    msg2.textContent = "welcome , " + name + " !";
    callbac(name);
}

function greet3(name){
    msg3.textContent = "Bye, " + name + " !";
}

greet("sri", greet2);








