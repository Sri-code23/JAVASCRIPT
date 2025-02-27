const button = document.querySelector(".openmodalbtn");
const dialogbox = document.getElementById("dialog");
const closebtn = document.querySelector(".closebtn");

button.onclick = function(){
    dialogbox.showModal();
}

// closebtn.onclick = function() {
//     dialogbox.close();
// }

// closebtn.addEventListener("click" , ()=>{
//     dialogbox.close();
//     console.log("pressing close button");
// });

function closinganimation(){
    dialogbox.classList.add("closing_box");
    setTimeout(() => {
        dialogbox.classList.remove("closing_box");
        dialogbox.close();
    }, 150);
}