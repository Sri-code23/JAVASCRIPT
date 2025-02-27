const add_new_btn = document.querySelector(".create_new");
const dialog_box = document.getElementById("dialog_box");

// add new character button function
add_new_btn.addEventListener("click", () =>{
    dialog_box.showModal();
});

// close button function
function close_dialog_box(){
    dialog_box.close();
};

let char_name_input = document.getElementById("name");
let char_power_input = document.getElementById("power");
let char_age_input = document.getElementById("age");
const create_button = document.querySelector(".create_button");

let character_cards = [];

create_button.onclick= function(){
    let char_name = char_name_input.value ;
    let char_power = char_power_input.value ;
    let char_age = char_age_input.value ;
    character_cards = JSON.parse(localStorage.getItem("character_cards"));
    const new_object = new Card_creation_class(char_name,char_age, char_power);
    localStorage.setItem("character_cards", JSON.stringify(character_cards));
    display_cards();

}



class Card_creation_class{
    constructor(char_name, char_age,char_power){
        this.c_name = char_name;
        this.c_age = char_age;
        this.c_power = char_power;
        character_cards.push({
            name:`${this.c_name}`,
            power:`${this.c_age}`,
            age:`${this.c_power}`,
        });
        // console.log(character_cards);
    }
}

function display_cards(){
    let all_cards = JSON.parse(localStorage.getItem("character_cards"));
    // console.log(all_cards[0].name);
    // console.log(all_cards[1].age);
    // console.log(all_cards[2].power);
    // for (let i=0; i<=10 ;i++){
    //     console.log(i);
    // }
    let total_len = (all_cards.length)-1;
    for (let i=0 ; i<=total_len ; i++){
        create_card(all_cards[i].name, all_cards[i].age, all_cards[i].power);
    }
}

function create_card(Name, Age, Power){
    const cards_container = document.querySelector(".cards_container");
    const new_card = document.createElement("div");
    new_card.classList.add("card");

    const add_heading = document.createElement("h3");
    add_heading.textContent = `${Name}`
    new_card.append(add_heading);

    const age = document.createElement("p");
    age.textContent = `${Age}`
    new_card.append(age);

    const power = document.createElement("p");
    power.textContent = `${Power}`
    new_card.append(power);

    cards_container.appendChild(new_card);
}

display_cards();

function closing_animation(){
    dialog_box.classList.add("closing_animation");
    setTimeout(() => {
        dialog_box.classList.remove("closing_animation");
        close_dialog_box();
    }, 250);
}




// let all_cards = [];
// class Card_creation{
//     constructor(na_me, po_wer, a_ge){
//         // all_cards= JSON.parse(localStorage.getItem("all_cards")) || [];
        
//         all_cards.push({
//             name:`${na_me}`,
//             power:`${po_wer}`,
//             age:`${a_ge}`,
//             });
//         console.log(`length of the card :${all_cards.length}`);
       
//         localStorage.setItem("all_cards", JSON.stringify(all_cards));
//         this.name= na_me;
//         this.power= po_wer;
//         this.age= a_ge;
//     }
//     display_data_cards(){
//         let total_cards = JSON.parse(localStorage.getItem("all_cards")) || [];
//         // console.log(all_cards);
//         // console.log(all_cards[0].name);
//         let data_len = total_cards.length;
//         for (let i = 0 ; i <= data_len; i++){
//             console.log(total_cards[i].name);
//             console.log(total_cards[i].age);
//             console.log(total_cards[i].power);
//         }
//     }
//     // save_copy(){
//     //     let allcards= JSON.parse(localStorage.getItem("allcards")) || [];
//     //     allcards.push({
//     //         name: `${this.name}`,
//     //         power:`${this.power}`,
//     //          age:`${this.age}`
//     //         });
//     //     localStorage.setItem("allcards", JSON.stringify(allcards));
//     // }
//     // display_copy(){
//     //     let allcards= JSON.parse(localStorage.getItem("allcards")) || [];
//     //     console.log(allcards);
//     // }

//     create_card(){
//         const cards_container = document.querySelector(".cards_container");
//         const new_card = document.createElement("div");
//         new_card.classList.add("card");

//         const add_heading = document.createElement("h3");
//         add_heading.textContent = `${this.name}`
//         new_card.append(add_heading);

//         const age = document.createElement("p");
//         age.textContent = `${this.age}`
//         new_card.append(age);

//         const power = document.createElement("p");
//         power.textContent = `${this.power}`
//         new_card.append(power);

//         cards_container.appendChild(new_card);
//     }
// }


// // let all_cards = JSON.parse(localStorage.getItem("all_cards")) || [];
// // console.log(all_cards);

// // for (let i = 0 ; i <= all_cards.length ; i++){
// //     const new_character = new Card_creation(
// //         all_cards[i].name,
// //          all_cards[i].power,
// //          all_cards[i].age);
// //          new_character.display_data_cards();
// // }

// let char_name_input = document.getElementById("name");
// let char_power_input = document.getElementById("power");
// let char_age_input = document.getElementById("age");
// const create_button = document.querySelector(".create_button");
// create_button.onclick= function(){
//     let char_name = char_name_input.value;
//     let char_power = char_power_input.value;
//     let char_age = char_age_input.value;
//     const new_character = new Card_creation(
//         char_name,
//         char_power,
//          char_age);
//     new_character.display_data_cards();
//     // new_character.save_copy();
//     // new_character.display_copy();
//     // new_character.create_card();
//     char_name_input.value = "";
//     char_power_input.value = "";
//     char_age_input.value = "";
//     close_dialog_box();
// };

// let all_cards = [];


// let some_nos = [1,2,3,4,5,6,7];
// some_nos.forEach((element)=>{
//     console.log(element);
// })


// for (let j=1; j<10 ; j++){
//     console.log(j);
// }