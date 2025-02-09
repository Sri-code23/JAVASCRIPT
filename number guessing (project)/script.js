// number guessing game

const user_guess = document.getElementById("guess");
const button = document.querySelector(".submit");
const output = document.querySelector(".output_field");

minvalue = 1;
maxvalue = 100;
answer = Math.floor((Math.random()* maxvalue) + minvalue);


button.onclick = function(){
    guess = user_guess.value;
    guess = Number(guess);

    gameover = false;

    while(!gameover){
        if(guess == ""){
            output.textContent = "Please enter a number";
        }
        else if(guess < minvalue || guess > maxvalue){
            output.textContent = "Please enter a number between " + minvalue + " and " + max
        }
        else if(guess>=minvalue && guess<=maxvalue){
            if(guess < answer){
                output.textContent = "Too low!";
            }
            else if(guess > answer){
                output.textContent = "Too high!";
            }
            else if(guess == answer){
                output.textContent = "You won!";
                gameover = true;
            }
        }
        // if(!isNaN(guess)){
        //     output.textContent = `${guess} is not a number`;
        // }
        // else if(guess == ""){
        //     output.textContent = ` please enter a number `;
        // }
        // else if(guess < minvalue || guess > maxvalue){
            

        // }
        // else{
        //     output.textcontent = "else statement here";
        //     gameover = true;
        // }
    }

    // output.textContent = `${guess}`;
}






