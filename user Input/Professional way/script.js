document.getElementById("submit-button").onclick =function () { // function to get the value of the input field and display it in the welcome message
    var username = document.getElementById("name").value; 
    // get the value of the input field
    document.getElementById("welcome").textContent =  `Hello, ${username} ! `; 
    // display the value in the welcome message
    document.getElementById("name").value = "";
    // clear the input field after displaying the welcome message





    // document.getElementById("welcome").innerHTML = `<h2>Welcome ${username}</h2>` 
    // display the value in the welcome message


    /* document.getElementById("welcome").style.color = "green";
       document.getElementById("welcome").style.fontSize = "30px";
       document.getElementById("welcome").style.fontFamily = "Arial";
       document.getElementById("welcome").style.fontWeight = "bold";
       document.getElementById("welcome").style.textAlign = "center";
       document.getElementById("welcome").style.marginTop = "10px";
    */

}

// document.getElementById("submit-button").addEventListener("click",function(event){
//     if(event.key === "Enter"){
//         document.getElementById("submit-button").click();
//     }
// })

