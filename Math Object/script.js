// round : to find the round off value of a number
document.getElementById("roundof").onclick = function(){
    var input_value = document.getElementById("input_value").value ;
    output_value = Math.round(input_value);
    document.getElementById("output").textContent = ` Round of ${input_value} is : ${output_value}` ;
    document.getElementById("input_value").value = "";
}

// floor : to find the floor value of a number i.e . the largest integer less than or equal to the number
document.getElementById("floor").onclick = function(){
    var input_value = document.getElementById("input_value").value ;
    output_value = Math.floor(input_value);
    document.getElementById("output").textContent =` floor of ${input_value} is : ${output_value}`;
    document.getElementById("input_value").value = "";
}

// ceil : to find the ceil value of a number i.e . the smallest integer greater than or equal to the number
document.getElementById("ceil").onclick = function(){
    var input_value = document.getElementById("input_value").value ;
    output_value = Math.ceil(input_value);
    document.getElementById("output").textContent = ` ceil of ${input_value} is : ${output_value}` ;
    document.getElementById("input_value").value = "";
}

// truncate : to find the truncate value of a number i.e . the integer part of the number
document.getElementById("truncate").onclick = function(){
    var input_value = document.getElementById("input_value").value ;
    output_value = Math.trunc(input_value);
    document.getElementById("output").textContent = ` truncate of ${input_value} is : ${output_value}` ;
    document.getElementById("input_value").value = "";
}

// square_root : to find the square root of a number
document.getElementById("square_root").onclick = function(){
    var input_value = document.getElementById("input_value").value ;
    output_value = Math.sqrt(input_value);
    document.getElementById("output").textContent = ` square_root of ${input_value} is : ${output_value}` ;
    document.getElementById("input_value").value = "";
}

// log : to find the log of a number
document.getElementById("log").onclick = function(){
    var input_value = document.getElementById("input_value").value ;
    output_value = Math.log(input_value);
    document.getElementById("output").textContent = ` log of ${input_value} is : ${output_value}` ;
    document.getElementById("input_value").value = "";
}

// sine : to find the sine of a number
document.getElementById("sin").onclick = function(){
    var input_value = document.getElementById("input_value").value ;
    output_value = Math.sin(input_value);
    document.getElementById("output").textContent = ` sin of ${input_value} is : ${output_value}` ;
    document.getElementById("input_value").value = "";
}

// cosine : to find the cosine of a number
document.getElementById("cos").onclick = function(){
    var input_value = document.getElementById("input_value").value ;
    output_value = Math.cos(input_value);
    document.getElementById("output").textContent = ` cos of ${input_value} is : ${output_value}` ;
    document.getElementById("input_value").value = "";
}

// tan : to find the tan of a number
document.getElementById("tan").onclick = function(){
    var input_value = document.getElementById("input_value").value ;
    output_value = Math.tan(input_value);
    document.getElementById("output").textContent = ` tan of ${input_value} is : ${output_value}` ;
    document.getElementById("input_value").value = "";
}

// absolute : to find the absolute value of a number
document.getElementById("absolute").onclick = function(){
    var input_value = document.getElementById("input_value").value ;
    output_value = Math.abs(input_value);
    document.getElementById("output").textContent = ` absolute of ${input_value} is : ${output_value}` ;
    document.getElementById("input_value").value = "";
}

// sign : to find the sign of a number
document.getElementById("sign").onclick = function(){
    var input_value = document.getElementById("input_value").value ;
    output_value = Math.sign(input_value);
    if (output_value == 1) {
        document.getElementById("output").textContent = input_value + " is Positive" ;
    }
    else if (output_value == -1) {
        document.getElementById("output").textContent = input_value + " is Negative" ;
    }
    document.getElementById("input_value").value = "";
}















































