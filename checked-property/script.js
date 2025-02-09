const malebutton = document.getElementById("male");
const femalebutton = document.getElementById("female");
const otherbutton = document.getElementById("other");
const accept_checkbox = document.getElementById("accept");
const submit = document.getElementById("submit");

const notification = document.getElementById("notification");

const acceptnotification = document.createElement("div");
acceptnotification.classList.add("accept_notif"); 

const gender_notification = document.createElement("div");
gender_notification.classList.add("gendernotif");

submit.onclick = function() {
    if(accept_checkbox.checked){
        acceptnotification.textContent = "You have accepted the terms and conditions";
        notification.appendChild(acceptnotification);
        if(malebutton.checked){
            gender_notification.textContent = "You have selected Male";
        }
        else if(femalebutton.checked){
            gender_notification.textContent = "You have selected Female";
        }
        else if(otherbutton.checked){
            gender_notification.textContent = "You have selected Other";
        }
        else{
            gender_notification.textContent = "Please select a gender";
        }
        notification.appendChild(gender_notification);
    }
    else{
        acceptnotification.textContent = "Please accept the terms and conditions"; 
        notification.appendChild(acceptnotification);
    }

    // setTimeout(() => {
    //     notification.innerHTML = ""; // Clear notifications after 4 seconds
    // }, 1000);
}






/*
const malebutton = document.getElementById("male");
const femalebutton = document.getElementById("Female");
const otherbutton = document.getElementById("other");
const accept_checkbox = document.getElementById("accept");
const submit = document.getElementById("submit");
// const opmessage = document.getElementById("message");
// const acceptmessage = document.getElementById("acceptmessage");

const notification = document.getElementById("notification");

const acceptnotification = document.createElement("div");
acceptnotification.className.add("accept_notif")
notification.appendChild(acceptnotification);

const gender_notification = document.createElement("div");
gender_notification.classList.add("gendernotif");
notification.appendChild(gender_notification);

submit.onclick = function() {
    if(accept_checkbox.checked){
        if(malebutton.checked){
            gender_notification.textContent = "You have selected Male";
            // opmessage.textContent = "you are male";
        }
        else if(femalebutton.checked){
            gender_notification.textContent = "You have selected Female";
            // opmessage.textContent = "you are female";
        }
        else if(otherbutton.checked){
            gender_notification.textContent = "You have selected Other";
            // opmessage.textContent = "you are other";
        }
        else{
            gender_notification.textContent = "Please select a gender";
            // opmessage.textContent = "please select gender";
        }
        acceptnotification.textContent = "you have accepted the terms and conditions";
    }
    else{
        acceptnotification.textContent = "please accept the terms and conditions";
        gender_notification.textContent = "";
    }
}
    */