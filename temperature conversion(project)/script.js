const button = document.getElementById("convert");
const c_f = document.getElementById("celsius");
const f_c = document.getElementById("fahren");
const output = document.getElementById("output");

function convert() {
    let input = document.getElementById("textbox").value;
    if(c_f.checked){
        let result = (input * 9/5) + 32;
        output.textContent = result.toFixed(2) + "°F";
    }
    else if(f_c.checked){
        let result = (input - 32) * 5/9;
        output.textContent = result.toFixed(2) + "°C";
    }
    else{
        output.textContent = " ❗ Please select the unit"
    }
}