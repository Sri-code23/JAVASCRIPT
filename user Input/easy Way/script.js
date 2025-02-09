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



