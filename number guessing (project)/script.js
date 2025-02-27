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

//- `container.remove()` changed to `container.style.display = "none"` to hide the container instead of removing it.
// - `document.body.appendChild(container)` changed to `container.style.display = "block"` to show the container instead of re-adding it to the DOM.