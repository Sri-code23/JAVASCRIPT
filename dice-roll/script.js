// dice roll game

function total_(args){
    let total = 0;
    for (let arg of args){
        total += arg;
    }
    return total;
}


function rollDice(){
    random_nums = [];
    images_array = [];
    let dices = document.getElementById("numofdice").value ;
    let images = document.querySelector(".images");
    let output = document.getElementById("output");
    let output_field = document.querySelector(".output_field");


    for(let i = 1; i<=dices ; i++){
        let nums = Math.floor((Math.random() * 6) +1);
        random_nums.push(nums);
        let img_url = `<img id="dice" src="dice_images/${nums}.jpg" alt="dice1">`;
        images_array.push(img_url);
    }
    output_field.style .display = "block";
    output.textContent = random_nums.join(" - ");
    images.innerHTML = images_array.join(" ");
    let tot = total_(random_nums)
    document.getElementById("total").textContent = "Total : " + tot;
}


