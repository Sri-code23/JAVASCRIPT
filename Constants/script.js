// const - constants in js 
// const is used to declare a constant variable

const pi =3.14 ;
let radius ;
let circum ;


document.getElementById("submit").onclick = function(){
    radius = document.getElementById("input_text").value ;
    radius = Number(radius);
    circum = (2 * pi * radius );
    document.getElementById("output").textContent = circum + " cm"; 
    document.getElementById("input_text").value = ""; //clear the input box after submitting the value
}

