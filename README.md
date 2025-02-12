# JavaScript

___



## To print on console 

```
console.log(" hello world ")
console.log(' hello world ')
console.log(` hello world `)
```

## To print on window popup

```
window.alert("hello")
```


# Variables 
variables are used to store data that can be used later
in the program

## variable declaration
 1. var
 2. let
 3. const

## var
 var is used to declare a variable, but it has some issues
 1. var can be redeclared
 2. var can be reassign
 3. var has a function scope
 4. var is hoisted

```javascript
var name = "John";
console.log(name);
var name = "Doe";
console.log(name);
```

## let 
 let is used to declare a variable, it has some issues
 1. let can not be redeclared
 2. let can be reassigned
 3. let has a block scope
 4. let is not hoisted

```javascript
let age = 30;
console.log(age);
age = 40;
console.log(age);
```


## const
 const is used to declare a variable, it has some issues
 1. const can not be redeclared
 2. const can not be reassigned
 3. const has a block scope
 4. const is not hoisted


```js
const country = "Bangladesh";
console.log(country);
country = "India";
console.log(country);
country = "Pakistan";
console.log(country);
const country = "Nepal";
console.log(country);
```

# Data types

1. int
2. float
3. string
4. boolean
5. array
6. object
7. null
8. undefined
9. NaN


```js 
// 1. int
var age = 30;
console.log(age);
// 2. float
var height = 5.7;
console.log(height);
// 3. string
var name = "John";
console.log(name);
// 4. boolean
var isAdmin = true;
console.log(isAdmin);
// 5. array
var names = ["John", "Doe", "Smith"];
console.log(names);
// 6. object
var user = {
    name: "John",
    age: 30
    };
    console.log(user);

// 7. null
var car = null;
console.log(car);
// 8. undefined
var test;
console.log(test);
// 9. NaN
var result = 10 * "a";
console.log(result);    
// 10. Infinity
var result = 1 / 0;
console.log(result);
// 11. -Infinity
var result = -1 / 0;
console.log(result);
```


# Arithmetic Operators
Arithmetic operators are used to perform mathematical operations on numbers. Here are the basic arithmetic operators in JavaScript
1. Addition: `a + b`
2. Subtraction: `a - b`
3. Multiplication: `a * b`
4. Division: `a / b`
5. Modulus: `a % b`
6. Exponentiation: `a ** b`
7. Increment: `a++` or `++a`
8. Decrement: `a--` or `--a`
Here is an example of how to use these operators in JavaScript

```js
let a = 20;

// addition
a = a + 1;
console.log(a);
// Output: 21

// subtraction
a = a - 3;
console.log(a);
// Output: 18

// multiplication
a = a * 2;
console.log(a);
// Output: 36

//division 
a = a / 2;
console.log(a);
// Output: 18

//Modulus 
a = a % 4;
console.log(a);
// Output: 2

// Increment
a++;
console.log(a);
// Output: 3

// Decrement
a--;
console.log(a);
// Output: 2

// Exponentiation
a = a ** 2;
console.log(a);
// Output: 4
```


# Getting user input
## Easy way to get user input in JavaScript
To get user input in JavaScript, you can use the `prompt()` function. Here is an example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User input</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1 id="heading">hello </h1>
        <!-- see script.js for filler -->
    <script src="script.js"></script>
</body>
</html>
```

```js
/* user input (easy way using javascript) */
// getting user input using prompt and displaying it on the webpage using innerHTML property of document object model (DOM)
// prompt() method is used to display a dialog box with an optional message prompting the user to input some text. It returns a string containing the text entered by the user, or null.

// declaring a variable username
var username;

// getting user input using prompt and storing it in the variable username
username= window.prompt("Enter your name");

// displaying the value of username on the webpage using innerHTML property of document object model (DOM)
document.getElementById("heading").innerHTML =
`
<div class="container">
<h2>Welcome, ${username} </h2> 
</div>
`;

```

## Professional way to get user input in JavaScript
in this we use html input tag to receive input and pass it to the js 
example code:

### Html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Professional way</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
      <h2 id="welcome">How can i call you ? </h2>
      <!-- <label for="name">USER NAME : </label> -->
      <input id="name" placeholder="Enter your name"  maxlength="10" required >
      <button id="submit-button"> Enter</button>
    </div>
    <script src="script.js"></script>
</body>
</html>

```

### css
```css
body{
    background-color: #000000;
    color: #ffffff;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

h2{
    color: #ffffff;
    text-align: center;
    font-size: 25px;
    margin-top: 25px;
    font-weight: bold;
}

.container{
    position:fixed;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    width:300px;
    height:250px;
    background-color:#0f333b;
    border-radius: 15px;
    box-shadow: 0 0 10px #000000;
    /* just to center the elements inside ithe container */
    display: flex;
    flex-direction: column;
    align-items: center;
}

.container input{
    width: 240px;
    height: 30px;
    margin: 10px 20px;
    border-radius: 5px;
    border: none;
    padding-left: 10px;
    background-color: #000000;
    color: beige;
}

.container input:focus{
    outline: none;
    border: 1px solid #636363;
    background-color: #000000;
    color: #ffffff;
    font-weight: bold;
}

.container input::placeholder{
    color: #7c7c7c;
    font-weight: bold;
}

/* .container input::selection{
    background-color: #ffe922;
    color: #978800;
}

.container input:active{
    background-color: #000000;
    color: #ffffff;
} */

.container button{
    width: 250px;
    height: 36px;
    margin: 30px 10px;
    border-radius: 5px;
    border: none;
    background-color: #ffffff;
    color: #000000;
    font-size: 15px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: bold;
}
.container button:hover{
    background-color: rgb(0, 0, 0);
    /* font-size: 14px; */
    font-weight: bold;
    color: #ffffff;
}

@media screen and (max-width: 600px){
    .container{
        width: 250px;
        height: 200px;
    }

    .container input{
        width: 200px;
        height: 40px;
        margin: 5px 10px;
    }

    .container button{
        width: 200px;
        height: 36px;
        margin: 20px 10px;
    }
    
}
```

### javaScript
```js
document.getElementById("submit-button").onclick =function () { // function to get the value of the input field and display it in the welcome message
    var username = document.getElementById("name").value; 
    // get the value of the input field
    document.getElementById("welcome").textContent =  `Hello, ${username} ! `; 
    // display the value in the welcome message
    document.getElementById("name").value = "";
    // clear the input field after displaying the welcome message





    // document.getElementById("welcome").innerHTML = `<h2>Welcome ${username}</h2>` 
    // display the value in the welcome message
}
```


# Constants
in js, constants are declared using the `const` keyword. They cannot be reassigned once declared.

```js
// const - constants in js 
// const is used to declare a constant variable

const pi =3.14 ;

```

# counter program (project)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Counter</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h3 class="heading">Counter Program</h3>
        <div class="sub_container">
            <div class="count_container">
                <button id="decrease" class="button1"><strong> ー </strong></button>
                    <div id="count_div">
                        <strong><h2 id="count">0</h2></strong>
                    </div>
                <button id="increase" class="button2"><strong> + </strong></button>
            </div>
            <div class="reset">
                <button id="reset" class="reset_button"><strong> reset  </strong></button>
            </div>
        </div>
    </div>
<script src="script.js"></script>
</body>
</html>
```

```css
/* styles.css */
body{
    background-color: rgb(0, 0, 0);
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.container{
    display: flex;
    align-items:center;
    justify-content: center;
    border: 1px solid rgb(53, 53, 53);
    flex-direction: column;
    font-size: 30px;
    font-weight: 700;
    color: white;
    border-radius: 15px;
    padding: 30px 30px;
    overflow: hidden;
    margin: 10px 10px;
    position: fixed;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    width:50%;
    height:300px;
}

.heading{
    padding: 1px 90px 10px 90px;
    color: aquamarine;
    border-bottom: 1px solid grey;

}

.sub_container{
    background-color: rgb(0, 0, 0);
    border: 2px solid rgb(0, 0, 0);
    width: 90%;
    height: 70%;
    padding: 10px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    border-radius: 10px;
}


.count_container{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgb(0, 0, 0);
    flex-direction: row;
    font-size: 30px;
    font-weight: 700;
    color: rgb(187, 187, 187);
    border-radius: 15px;
    padding: 20px 10px;
    width: 90%;
    gap: 20px;
}


.button1{
    padding: 0px 10px;
    width: 20%;
    height: 90px;
    font-size: 50px;
    border-radius:10px;
    background-color: rgb(0, 0, 0);
    border: 2px solid rgb(80, 80, 80);
    font-weight: 2000;
    color: white;
    overflow: hidden;
}

.button1:hover{
    transform: translateY(0.1px);
    border:2px solid rgb(150, 150, 150);
}
.button1:active{
    border: 2px solid rgb(150, 0, 0);
}

.button2{
    padding: 0px 10px;
    width: 20%;
    height: 90px;
    font-size: 80px;
    border-radius:10px;
    background-color: rgb(0, 0, 0);
    border: 2px solid rgb(80, 80, 80);
    font-weight: 2000;
    color: white;
    overflow: hidden;

}

.button2:hover{
    transform: translateY(0.1px);
    border: 2px solid rgb(150, 150, 150);
}
.button2:active{
    border: 2px solid rgb(0, 151, 45);
}

.reset{
    width:60%;
    height:50px;
    /* background-color: aqua; */
    border-radius: 10px;
}

.reset_button{
    padding: 0px 10px;
    width: 100%;
    height: 100%;
    font-size: 30px;
    border-radius:10px;
    background-color: rgb(0, 0, 0);
    border: 2px solid rgb(80, 80, 80);
    font-weight: 2000;
    color: white;
    overflow: hidden;

}

.reset_button:hover{
    transform: translateY(0.1px);
    border: 2px solid rgb(148, 148, 148);
}
.reset_button:active{
    border: 2px solid rgb(184, 184, 184);
}
#count_div{
    min-width:40%;
    width: auto;
    height: 100px;
    display: flex;
    align-items:center;
    justify-content: center;
    border: 1px solid grey;
    border-radius:10px;
    padding: 10px 10px
}

h2{
    font-weight: 1000;
    font-size: 80px;
}

@media screen and (max-width:480px){
    .container{
        font-size: 20px;
        padding: 20px 30px;
        margin: 1px 1px;
        width: 70%;
        height:300px;
    }
    
    .sub_container{
        width: 100%;
        height: 70%;
        padding: 0px 0px;
    }
    
    .heading{
        padding: 1px 25px 20px 25px;
    }
    
    .count_container{
        font-size: 20px;
        padding: 10px 1px;
        width: 100%;
        gap: 10px;
    }
    
    .button1{
        padding: 0px 1px;
        width: 20%;
        height: 20%;
        font-size: 35px;
    }
    
    .button2{
        padding: 6px 1px;
        width: 20%;
        height: 20%;
        font-size: 35px;
    }
    
    .reset{
        width:90%;
        height:40px;
    }
    
    .reset_button{
        font-size: 20px;
    }
    
    #count_div{
        min-width:40%;
        width: auto;
        height: 80px;
        padding: 4px 4px
    }
    
    h2{
        font-size: 60px;
    }
    
}



```


```js

let count = 0;

document.getElementById("increase").onclick = function(){
    count = count +1;
    document.getElementById("count").textContent = count ;
}

document.getElementById("decrease").onclick = function(){
    count = count -1;
    document.getElementById("count").textContent = count ;
}


document.getElementById("reset").onclick = function(){
    count = 0;
    document.getElementById("count").textContent = count ;
}

```


# math object
The math object is a built-in object in JavaScript that provides functions for mathematical operations. It is not a DOM element, so it cannot be styled with CSS. However, you can use the math object to perform mathematical operations in your JavaScript code.
## Examples
Here are a few examples of how you can use the math object in your JavaScript code:
```javascript
// Calculate the square root of a number
let result = Math.sqrt(16);
console.log(result); // Output: 4

// Calculate the absolute value of a number
let result = Math.abs(-5);
console.log(result); // Output: 5

// Calculate the maximum of two numbers
let result = Math.max(10, 20);
console.log(result); // Output: 20

// Calculate the minimum of two numbers
let result = Math.min(10, 20);
console.log(result); // Output: 10

// Calculate the power of a number
let result = Math.pow(2, 3);
console.log(result); // Output: 8

// Calculate the random number between 0 and 1
let result = Math.random();
console.log(result); // Output: a random number between 0 and 1

// Calculate the round of a number
let result = Math.round(3.7);
console.log(result); // Output: 4

// Calculate the floor of a number
let result = Math.floor(3.7);
console.log(result); // Output: 3

// Calculate the ceil of a number
let result = Math.ceil(3.7);
console.log(result); // Output: 4

// Calculate the sin of a number
let result = Math.sin(3.14);
console.log(result); // Output: a value between -1 and 1

// Calculate the cos of a number
let result = Math.cos(3.14);
console.log(result); // Output: a value between -1 and 1

// Calculate the tan of a number
let result = Math.tan(3.14);
console.log(result); // Output: a value between -1 and 1

// Calculate the asin of a number
let result = Math.asin(0.5);
console.log(result); // Output: a value between -1 and 1

// Calculate the acos of a number
let result = Math.acos(0.5);
console.log(result); // Output: a value between 0 and 1

// Calculate the atan of a number
let result = Math.atan(0.5);
console.log(result); // Output: a value between -1 and 1

// random number between 1 and 100
let result = Math.floor(Math.random() * 100) + 1;
console.log(result); // Output: a random number between 1 and 100

```


# Type Conversion
In JavaScript, you can convert a number to a string using the `toString()` method or the
`String()` function. You can also convert a string to a number using the `parseInt()` or
`parseFloat()` functions.
```javascript
// Convert a number to a string
let number = 123;
let string = number.toString();
console.log(string); // Output: "123"
console.log(typeof string); // Output: "string"
console.log(typeof number); // Output: "number"

console.log(String(number)); // Output: "123"
console.log(typeof String(number)); // Output: "string"

```
in javasript you can convert a string to a number using the `parseInt()` or `parseFloat()` functions.
Number() function can also be used to convert a string to a number.

```js
// Convert a string to a number
let string = "123";
let number = parseInt(string);
console.log(number); // Output: 123
console.log(typeof number); // Output: "number"
console.log(parseFloat(string)); // Output: 123
console.log(Number(string)); // Output: 123

```

in JavaScript you can convert a number or string to a boolean using the `Boolean()` function. 

```js
// Convert a number or string to a boolean
let number = 123;
let string = "123";
let boolean = Boolean(number);
console.log(boolean); // Output: true
console.log(Boolean(string)); // Output: true

```


# if else statement
if else statement is used to execute different blocks of code based on a condition.

## example 
```js
let age = 25;
if(age > 18){
    console.log("You are an adult");
}
else if (age === 18){
    console.log("You are an adult but not yet an adult");
}
else{
    console.log("You are a minor");
}
```
in this example, the code inside the if block will be executed if the age is greater than 18. If the age is 18, the code inside the else if block will be executed . If the age is less than 18, the code inside the else block will be executed.

# checked property 
The `checked` property is used to get or set the checked state of a checkbox element.

## example 
```html
<!-- html  -->
<input type="checkbox" id="checkbox" checked>
```

```js
// javascript
let checkbox = document.getElementById("checkbox");
console.log(checkbox.checked); // Output: true
```


# logical operators
logical operators are used to combine multiple conditions in a conditional statement.
```js
// Logical Operators in JavaScript

// AND Operator (&&)
// Returns true if both conditions are true
console.log(true && true);  // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// OR Operator (||)
// Returns true if at least one condition is true
console.log(true || true);  // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// NOT Operator (!)
// Returns the opposite of the condition
console.log(!true);  // false
console.log(!false); // true

// Example usage:
let age = 25;
let isAdult = age >= 18;
let isEmployed = true;

if (isAdult && isEmployed) {
  console.log("You are an adult and employed.");
} else {
  console.log("You are either not an adult or not employed.");
}

```


# method chaining
method chaining is a technique where you call multiple methods on the same object in a single line of code.

```js

// Method Chaining Example

class Calculator {
  constructor(value) {
    this.value = value;
  }

  add(num) {
    this.value += num;
    return this; // Return the object to enable method chaining
  }

  subtract(num) {
    this.value -= num;
    return this; // Return the object to enable method chaining
  }

  multiply(num) {
    this.value *= num;
    return this; // Return the object to enable method chaining
  }

  divide(num) {
    this.value /= num;
    return this; // Return the object to enable method chaining
  }

  result() {
    return this.value;
  }
}

// Using method chaining
const calculator = new Calculator(10);
const result = calculator.add(5).subtract(2).multiply(3).divide(1).result(); // Output: 30
console.log(result); // Output: 39

// Without method chaining
class CalculatorWithoutChaining {
  constructor(value) {
    this.value = value;
  }

  add(num) {
    this.value += num;
  }

  subtract(num) {
    this.value -= num;
  }

  multiply(num) {
    this.value *= num;
  }

  divide(num) {
    this.value /= num;
  }

  result() {
    return this.value;
  }
}

const calculatorWithoutChaining = new CalculatorWithoutChaining(10);
calculatorWithoutChaining.add(5);
calculatorWithoutChaining.subtract(2);
calculatorWithoutChaining.multiply(3);
calculatorWithoutChaining.divide(1);
const resultWithoutChaining = calculatorWithoutChaining.result();
console.log(resultWithoutChaining); // Output: 39
```



# strict equality operator
The strict equality operator (`===`) checks if the values and data types of two variables are equal.

```js
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
```




# ternary operator
The ternary operator is a shorthand way to write a simple if-else statement. It consists of three parts: a condition, an expression if the condition is true, and an expression if the condition is false. The general syntax is: `condition ? expressionIfTrue : expressionIfFalse` 

```js
// instead of if else
 if(age >= 18){
        notification.textContent = " You are eligible  ✔ ";
        output.append(notification);
    }
    else{
        notification.textContent = " ❌ Sorry, you are not eleigible ";
        output.append(notification);
    }

// we can use the ternary operator
 age>=18 ? console.log("You are eleigible") : console.log("Sorry, you are not eleig")

 ```




# string methods
string methods are used to perform various operations on strings such as searching, replacing, splitting, and joining strings.

```js
let username = "Sridharan";

// Get the character at the specified index (0-based)
let characterat = username.charAt(0);
console.log(characterat); // Output: S

// Get the index of the first occurrence of the specified value
let index_of = username.indexOf("a");
console.log(index_of); // Output: 7

// Get the index of the last occurrence of the specified value
let lastindex_of = username.lastIndexOf("a");
console.log(lastindex_of); // Output: 7

// Get the length of the string
let length_of = username.length;
console.log(length_of); // Output: 9

// Remove whitespace from both ends of the string
let trimming = username.trim();
console.log(trimming); // Output: Sridharan

// Convert the string to uppercase
let uppercase = username.toUpperCase();
console.log(uppercase); // Output: SRIDHARAN

// Convert the string to lowercase
let lowercase = username.toLowerCase();
console.log(lowercase); // Output: sridharan

// Repeat the string the specified number of times
let repeat = username.repeat(2);
console.log(repeat); // Output: SridharanSridharan

// Check if the string starts with the specified value (Note: correct method name is startsWith)
let startwith = username.startsWith("S");
console.log(startwith); // Output: true

// Check if the string ends with the specified value (Note: correct method name is endsWith)
let endwith = username.endsWith("an");
console.log(endwith); // Output: true

// Check if the string includes the specified value
let include = username.includes("a");
console.log(include); // Output: true

// Replace all occurrences of the specified value with another value (Note: correct method name is replace)
let replaceall = username.replace("a", "e");
console.log(replaceall); // Output: Sreidheren

// Pad the string with the specified value to the specified length on the left
let padstart = username.padStart(10, "0");
console.log(padstart); // Output: 000Sridharan

// Pad the string with the specified value to the specified length on the right
let padend = username.padEnd(10, "0");
console.log(padend); // Output: Sridharan000


```



# string slicing
```js
// String Slicing in JavaScript
// ===========================

// The slice() method extracts a section of a string and returns it as a new string.
// It takes two parameters: the start index and the end index.

// Example 1: Basic Slicing
let str = "Hello, World!";
let slicedStr = str.slice(7, 12);
console.log(slicedStr); // Output: "World"

// Example 2: Omitting the End Index
let str2 = "Hello, World!";
let slicedStr2 = str2.slice(7);
console.log(slicedStr2); // Output: "World!"

// Example 3: Negative Index
let str3 = "Hello, World!";
let slicedStr3 = str3.slice(-6);
console.log(slicedStr3); // Output: "World!"

// Example 4: Slice with Negative Start and End Index
let str4 = "Hello, World!";
let slicedStr4 = str4.slice(-6, -1);
console.log(slicedStr4); // Output: "Worl"

// Example 5: Slice with Start Index Greater than End Index
let str5 = "Hello, World!";
let slicedStr5 = str5.slice(12, 7);
console.log(slicedStr5); // Output: ""

// Example 6: Slice with Start Index Equal to End Index
let str6 = "Hello, World!";
let slicedStr6 = str6.slice(7, 7);
console.log(slicedStr6); // Output: ""
```


# switch-case statement
The switch-case statement is used to execute different blocks of code based on the value of a variable.

```js
let a = 1;

switch(a){
    case 1:
        console.log("a is 1");
        break;
    case 2:
        console.log("a is 2");
        break;
    case 3:
        console.log("a is 3");
        break;
    default:
        console.log("a is not 1, 2 or 3");
}
```

# while loop 

The while loop is a control structure in JavaScript that allows you to execute a block of code repeatedly as long as a certain condition is true.

## Syntax
```javascript
while (condition) {
  // code to be executed
}
```
## Explanation

*   The `while` keyword is used to start the loop.
*   The `condition` is a boolean expression that is evaluated before each iteration of the loop.
*   If the condition is true, the code inside the loop is executed.
*   If the condition is false, the loop is terminated.

## Example 1: Basic While Loop
```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```
Output:
```
0
1
2
3
4
```
In this example, the loop will continue to execute as long as `i` is less than 5. The value of `i` is incremented by 1 in each iteration.

## Example 2: While Loop with a String Condition
```javascript
let name = "";
while (name !== "John") {
  name = prompt("Enter your name:");
}
console.log("Hello, " + name);
```
In this example, the loop will continue to execute until the user enters the name "John".

## Example 3: While Loop with a Counter
```javascript
let count = 0;
while (count < 10) {
  console.log(count);
  count++;
}
```
Output:
```
0
1
2
3
4
5
6
7
8
9
```
In this example, the loop will execute 10 times, printing the numbers from 0 to 9.

## Example 4: While Loop with a Nested Loop
```javascript
let i = 0;
while (i < 3) {
  let j = 0;
  while (j < 3) {
    console.log(i + " " + j);
    j++;
  }
  i++;
}
```
Output:
```
0 0
0 1
0 2
1 0
1 1
1 2
2 0
2 1
2 2
```
In this example, the outer loop will execute 3 times, and the inner loop will execute 3 times for each iteration of the outer loop.

# dowhile loop

The do-while loop is a control structure in JavaScript that allows you to execute a block of code repeatedly as long as a certain condition is true.

## Syntax
```javascript
do {
  // code to be executed
} while (condition);
```
## Explanation

*   The `do` keyword is used to start the loop.
*   The code inside the loop is executed at least once before the condition is evaluated.
*   The `while` keyword is used to specify the condition that must be true for the loop to continue.
*   If the condition is true, the loop will continue to execute.
*   If the condition is false, the loop will terminate.

## Example 1: Basic Do-While Loop
```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```
Output:
```
0
1
2
3
4
```
In this example, the loop will continue to execute as long as `i` is less than 5. The value of `i` is incremented by 1 in each iteration.

## Example 2: Do-While Loop with a String Condition
```javascript
let name = "";
do {
  name = prompt("Enter your name:");
} while (name !== "John");
console.log("Hello, " + name);
```
In this example, the loop will continue to execute until the user enters the name "John".

## Example 3: Do-While Loop with a Counter
```javascript
let count = 0;
do {
  console.log(count);
  count++;
} while (count < 10);
```
Output:
```
0
1
2
3
4
5
6
7
8
9
```
In this example, the loop will execute 10 times, printing the numbers from 0 to 9.

## Example 4: Do-While Loop with a Nested Loop
```javascript
let i = 0;
do {
  let j = 0;
  do {
    console.log(i + " " + j);
    j++;
  } while (j < 3);
  i++;
} while (i < 3);
```
Output:
```
0 0
0 1
0 2
1 0
1 1
1 2
2 0
2 1
2 2
```
In this example, the outer loop will execute 3 times, and the inner loop will execute 3 times for each iteration of the outer loop.

## Key Differences between While and Do-While Loops

*   In a while loop, the condition is evaluated before the code is executed. In a do-while loop, the code is executed at least once before the condition is evaluated.
*   A while loop may not execute at all if the condition is false. A do-while loop will always execute at least once.

When to Use Do-While Loops
---------------------------

*   Use a do-while loop when you want to ensure that the code inside the loop is executed at least once.
*   Use a do-while loop when you want to simplify your code by avoiding the need to initialize variables before the loop.
*   

# for loop

The `for` loop is a control structure in JavaScript that allows you to execute a block of code repeatedly for a specified number of iterations.

## Syntax
```javascript
for (initialization; condition; increment) {
  // code to be executed
}
```
## Explanation

*   The `for` keyword is used to start the loop.
*   The `initialization` statement is executed once before the loop starts. It is used to initialize the loop counter.
*   The `condition` statement is evaluated before each iteration of the loop. If it is true, the code inside the loop is executed.
*   The `increment` statement is executed after each iteration of the loop. It is used to update the loop counter.
*   The code inside the loop is executed repeatedly until the condition is false.

## Example 1: Basic For Loop
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```
Output:
```
0
1
2
3
4
```
In this example, the loop will execute 5 times, printing the numbers from 0 to 4.

## Example 2: For Loop with a String Condition
```javascript
let name = "";
for (let i = 0; i < 3; i++) {
  name = prompt("Enter your name:");
  console.log("Hello, " + name);
}
```
In this example, the loop will execute 3 times, prompting the user to enter their name and printing a greeting message.

## Example 3: For Loop with a Counter
```javascript
for (let count = 0; count < 10; count++) {
  console.log(count);
}
```
Output:
```
0
1
2
3
4
5
6
7
8
9
```
In this example, the loop will execute 10 times, printing the numbers from 0 to 9.

## Example 4: For Loop with a Nested Loop
```javascript
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i + " " + j);
  }
}
```
Output:
```
0 0
0 1
0 2
1 0
1 1
1 2
2 0
2 1
2 2
```
In this example, the outer loop will execute 3 times, and the inner loop will execute 3 times for each iteration of the outer loop.

## Example 5: For Loop with (of Array)

```js
const numbers = [1, 2, 3, 4, 5];
for (const number of numbers) {
    console.log(number);
}

```
## Key Differences between For and While Loops

*   In a `for` loop, the initialization, condition, and increment statements are combined in a single line. In a `while` loop, these statements are separate.
*   A `for` loop is more concise and easier to read than a `while` loop.

When to Use For Loops
--------------------

*   Use a `for` loop when you need to execute a block of code for a specified number of iterations.
*   Use a `for` loop when you need to iterate over an array or an object.
*   Use a `for` loop when you need to simplify your code by combining the initialization, condition, and increment statements in a single line.
  

# number guessing game

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>number guess</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <div class="card">
            <h1 id="heading">guess the number 1 - 100 </h1>
            <input id="guess">
            <button class="submit">Enter</button>
            <!-- <div class="output">
                <p class="output_field">output</p>
            </div> -->
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>

```

styles
```css
body{
    background-color: black;
    color: white;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container{
    width: 300px;
    height: 200px;
    border: 0.2ex solid grey;
    background-color: #1c1e2e;
    border-radius: 10px;
    padding: 10px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

#heading{
    font-size: 20px;
}

.card{
    background-color: #1c1e2e;
    border-radius: 10px;
    padding: 10px 10px;
    width: 280px;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

input{
    color: rgb(255, 255, 255);
    background-color: rgb(0, 0, 0);
    width: 80%;
    height: 20px;
    border: 0.1ex solid grey;
    outline: none;
    padding: 20px 20px;
    font-size: 25px;
}

.submit{
    background-color: #f1f1f1;
    padding: 10px 10px;
    margin-top: 10px;
    width:80%;
    border: 0.1ex solid rgb(0, 0, 0);
}

.output_div{
    width: 70%;
    height: auto;
    position: fixed;
    top: 20px;
    right: 20px;
    padding:0px 10px;
    border-radius: 5px;
    border: 0.1ex solid grey;
    background-color: rgb(0, 0, 0);
}

.playagain{
    background-color: #000000;
    border-radius: 10px;
    padding: 10px 10px;
    width: 280px;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.playagain h4{
    color: rgb(0, 182, 76);
    font-size: 30px;    
}

.playagain_button{
    background: transparent;
    font-size: 70px;
    color: rgb(255, 255, 255);
    padding: 10px 10px;
    margin-bottom: 30px;
    width:80%;
    border: none;
    border-radius: 5px;
}

```

script
```js
// number guessing game

let user_guess = document.getElementById("guess");
const button = document.querySelector(".submit");

const container = document.querySelector(".container");
let notify = document.createElement("div");
notify.classList.add("output_div");


const minvalue = 1;
const maxvalue = 100;
const answer = Math.floor((Math.random() * maxvalue) + minvalue);

button.onclick = function(){
    notify.innerHTML = '<p class="output_field"></p>';
    container.append(notify);
    let output = document.querySelector(".output_field");
    
    let guess = user_guess.value; 
    guess = Number(guess);

    let gameover = false; 

    while(!gameover){
        if(isNaN(guess) || guess === " " ){
            output.textContent = "Please enter a number";
        }
        else if(guess < minvalue || guess > maxvalue){
            output.textContent = "Please enter a number between " + minvalue + " and " + maxvalue; // fix typo
        }
        else if(guess >= minvalue && guess <= maxvalue){
            if(guess < answer){
                output.textContent = "Too low!";
            }
            else if(guess > answer){
                output.textContent = "Too high!";
            }
            else if(guess === answer){ 
                // output.textContent = "You won!";
                // output.style.color = "green";
                container.style.display = "none";
                let playagain = document.createElement("div");
                playagain.classList.add("playagain");
                playagain.style.backgroundColor = "#1c1e2e";
                playagain.innerHTML = '<h4>You won!</h4><button class="playagain_button">↻</button>';
                document.body.appendChild(playagain);
                let play_again = document.querySelector(".playagain_button");

                play_again.onclick = function(){
                    container.style.display = "block";
                    playagain.remove();
                }
                gameover = true;
            }
        }
        user_guess.value = ""; // clear input field
        break; // exit while loop
        
    }
    setTimeout(() => {
        notify.remove();
    }, 2000);
}
```


# Array 
```js
// Array in JavaScript
// An array is a collection of elements of the same data type stored in contiguous memory locations.

// Creating an Array
let colors = ['red', 'green', 'blue'];

// Accessing Array Elements
console.log(colors[0]); // Output: red

// Array Operations
// 1. Push: Adds one or more elements to the end of an array.
colors.push('yellow');
console.log(colors); // Output: ['red', 'green', 'blue', 'yellow']

// 2. Pop: Removes the last element from an array.
colors.pop();
console.log(colors); // Output: ['red', 'green', 'blue']

// 3. Shift: Removes the first element from an array.
colors.shift();
console.log(colors); // Output: ['green', 'blue']

// 4. Unshift: Adds one or more elements to the beginning of an array.
colors.unshift('orange');
console.log(colors); // Output: ['orange', 'green', 'blue']

// Array Functions
// 1. Concat: Joins two or more arrays into a single array.
let numbers = [1, 2, 3];
let combined = colors.concat(numbers);
console.log(combined); // Output: ['orange', 'green', 'blue', 1, 2, 3]

// 2. Includes: Checks if an array includes a specified element.
console.log(colors.includes('green')); // Output: true

// 3. IndexOf: Returns the index of the first occurrence of a specified element.
console.log(colors.indexOf('blue')); // Output: 2

// 4. Join: Joins all elements of an array into a string.
console.log(colors.join(', ')); // Output: orange, green, blue

// 5. Slice: Returns a shallow copy of a portion of an array.
let sliced = colors.slice(1, 2);
console.log(sliced); // Output: ['green']

// 6. Splice: Adds or removes elements from an array.
colors.splice(1, 0, 'purple');
console.log(colors); // Output: ['orange', 'purple', 'green', 'blue']

// 7. Sort: Sorts the elements of an array in place.
let sorted = colors.sort();
console.log(sorted); // Output: ['blue', 'green', 'orange', 'purple']

// 8. Reverse: Reverses the order of the elements of an array.
let reversed = colors.reverse();
console.log(reversed); // Output: ['purple', 'orange', 'green', 'blue']

// 9. Map: Creates a new array with the results of applying a provided function on every element in this array.
let mapped = colors.map(color => color.toUpperCase());
console.log(mapped); // Output: ['PURPLE', 'ORANGE', 'GREEN', 'BLUE']

// 10. Filter: Creates a new array with all elements that pass the test implemented by the provided function.
let filtered = colors.filter(color => color.length > 5);
console.log(filtered); // Output: ['orange', 'purple']

// 11. Reduce: Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
let reduced = colors.reduce((acc, color) => acc + color.length, 0);
console.log(reduced); // Output: 20

```















* advanced method to generate random numbers between 1 and 10
```js
// Array of numbers from 1 to 10

let numbers = Array.from({length: 10}, (_, i) => i + 1);

console.log(numbers); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

```


# callback 
A callback is a function passed as an argument to another function

```js
// Example of a callback function
const msg1 = document.getElementById("output1");
const msg2 = document.getElementById("output2");
const msg3 = document.getElementById("output3");

// Function that takes a callback function as an argument
function greet(name, callback){
    msg1.textContent = "Hello , " + name + " !";
    callback(name, greet3); // 
}

function greet2(name, callbac){
    msg2.textContent = "welcome , " + name + " !";
    callbac(name);
}

function greet3(name){
    msg3.textContent = "Bye, " + name + " !";
}

greet("sri", greet2);

```

# foreach 

The `forEach()` method calls a provided function once for each element in an array.

```js
// The foreach loop in JavaScript is used to iterate over the elements of an array or other iterable objects.
// It executes a block of code for each element in the array.

const msg = document.getElementById("output");

// function printNumbers(number, index, array) {
//     // console.log(`Number: ${number}, Index: ${index}, Array: ${array}`);
//     msg1.innerHTML += `Number: ${number}, Index: ${index}, Array: ${array} <br><br>`;
// }
// let a = [1, 2, 3 ,4, 5, 6 ,7 , 8, 9, 10];
// a.forEach(printNumbers);

//////////////////////////
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
```

The `forEach()` method is used to iterate over the elements of an array. It executes a provided function once for each element in the array. The function takes three parameters: the current element, th index of the current element, and the array itself. The `forEach()` method is called on the array, and the function is called for each element in the array. The output of the program will be the values of the parameters number, index, and array for each element in the array. 
```js

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

```

## example 
```js

// Example 1: Using foreach to iterate over an array
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(num) {
  console.log(num);
});

// Example 2: Using foreach with arrow function
let names = ['John', 'Alice', 'Bob'];
names.forEach(name => console.log(name));

// Example 3: Using foreach with object
let person = {
  name: 'John',
  age: 30,
  city: 'New York'
};
Object.keys(person).forEach(key => console.log(`${key}: ${person[key]}`));

// Example 4: Using foreach with array of objects
let students = [
  { name: 'John', age: 20 },
  { name: 'Alice', age: 22 },
  { name: 'Bob', age: 21 }
];
students.forEach(student => console.log(`Name: ${student.name}, Age: ${student.age}`));
```


# random password generator(project)
## Project Description
This project is a simple random password generator. It will generate a random password of a specified length. The password will be a combination of uppercase and lowercase letters, numbers, and special characters.
```js

let output = document.querySelector(".output");

const passwordLength = 12;
const includeUppercase = true;
const includeLowercase = false;
const includeNumbers = true;
const includeSymbols = true;

function generatePassword(num_length,uppercase,lowercase,numbers,symbols){
    let password = "";
    let allowedCharacters = "";

    if(num_length<=0){
        output.textContent = "digits cant be less than or equal to '0' ";
    }
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbersSet = "1234567890";
    const symbolsSet = "!@#$%&*()_+?";

    if (uppercase) {
        allowedCharacters += uppercaseLetters;
    }
    if (lowercase) {
        allowedCharacters += lowercaseLetters;
    }
    if (numbers) {
        allowedCharacters += numbersSet;
    }
    if (symbols) {
        allowedCharacters += symbolsSet;
    }
    for(let i = 0; i < num_length; i++){
        password += allowedCharacters.charAt(Math.floor(Math.random() * allowedCharacters.length));
    }

    output.textContent = password;
}

generatePassword(passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
```


