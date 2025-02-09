const spin_button = document.getElementById("spin_button");
const output = document.getElementById("output_message");
const counts = document.getElementById("counts");
let Number1 = document.getElementById("box1");
let Number2 = document.getElementById("box2");
let Number3 = document.getElementById("box3");
let total_count = 5;
let game_over = false;
spin_button.onclick = function(){
    if (game_over){
        spin_button.textContent = "spin";
        output.textContent = "";
        // Number1.textContent = "";
        // Number2.textContent = "";
        // Number3.textContent = "";
        total_count = 5;
        counts.textContent = total_count ;
        game_over = false;
    }
    play_game();
}
function play_game(){
    counts.textContent = total_count ;
    if (total_count > 0 && total_count < 7){
        let randomnum1 = Math.floor(Math.random() * 6) + 1;
        let randomnum2 = Math.floor(Math.random() * 6) + 1;
        let randomnum3 = Math.floor(Math.random() * 6) + 1;

        setTimeout(() => {
            Number1.textContent = randomnum1 ;
        },0);

        setTimeout(() => {
            Number2.textContent = randomnum2 ;
        },0);

        setTimeout(() => {
            Number3.textContent = randomnum3 ;
        },0);


        output.style.color = "";
        Number1.style.color = "rgb(190, 172, 70)";
        Number2.style.color = "rgb(190, 172, 70)";
        Number3.style.color = "rgb(190, 172, 70)";

        if( randomnum1 == randomnum2 && randomnum2 == randomnum3 ){
            output.textContent = "You have won the game!";
            output.style.color = "green";
            Number1.style.color = "green";
            Number2.style.color = "green";
            Number3.style.color = "green";
        }

        else if( randomnum1 != randomnum2 && randomnum2 != randomnum3 && randomnum1 != randomnum3 ){
            output.textContent = "No luck this time!";
        }
        else{
            output.textContent = "Try again!";
        }
        total_count-- ;
    }
    else if(total_count == 0){
        output.textContent = "Game Over !";
        output.style.color = "orange";
        spin_button.textContent = "Play again ";
        // spin_button.onclick = function(){
        //     // location.reload(); // reload the page
        // }
        game_over= true;
    }
    else{
        output.textContent = "else statement here";
    }
}






