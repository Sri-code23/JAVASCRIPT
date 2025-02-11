function sample_message(){
    let fake_button = document.getElementById("fake_button");
    let rand = Math.floor((Math.random() *6 ) + 1);
    fake_button.innerHTML = `<img id="dice" src="dice_images/${rand}.jpg" alt="dice1">`;
}