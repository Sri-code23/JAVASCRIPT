const button = document.getElementById("check");
const ages = document.getElementById("age");
const output = document.getElementById("output");

const notification = document.createElement("div");
notification.classList.add("message_container");


button.onclick = function(){
    let age = ages.value;
    if(age >= 18){
        notification.textContent = " You are eligible  ✔ ";
        output.append(notification);
    }
    else{
        notification.textContent = " ❌ Sorry, you are not eleigible ";
        output.append(notification);
    }
    setTimeout(() => {
        output.remove(notification);
    }, 1800);
    ages.value = "";

    // ternary operator
    // age>=18 ? console.log("You are eleigible") : console.log("Sorry, you are not eleig
}







