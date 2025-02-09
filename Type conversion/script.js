document.getElementById("button").onclick = function(){
    let a = document.getElementById("input-value").value;
    
    // let type = typeof a;

    if ( !isNaN(a) && a !== ""){
        document.getElementById("output-h2").textContent = `' ${a} ' is a number `;
    }
    else if (a.toLowerCase() === "true"  || a.toLowerCase() === "false"){
        document.getElementById("output-h2").textContent = `' ${a} ' is Boolean `;
    }
    else{
        document.getElementById("output-h2").textContent = `' ${a} ' is String `;
    }
    // document.getElementById("output-h2").textContent = `' ${a} ' is ${type} `;
    document.getElementById("input-value").value = "" ;
};


    // if (typeof(a) == "string"){
    //     document.getElementById("output-h2").textContent = ` ${a} is a String`;
    // }
    // else if(typeof(a) == "number"){
    //     document.getElementById("output-h2").textContent = ` ${a} is a Number`;
    // }
    // else if(typeof(a) == "boolean"){
    //     document.getElementById("output-h2").textContent = ` ${a} is a Boolean`;
    // }

    // a = Number(a);
    // var b = String(a);
    // var c = Boolean(a);
    // if (a <= 0){
    //     document.getElementById("output-h2").textContent = ` ${a} is less than or equal to zero.`;
    // }

    // else if(a > 0){
    //     // document.getElementById("output-h2").textContent = ` ${a} is a positive number.`;
    //     document.getElementById("output-para").textContent = `${a} is a ${typeof a}`;
    // }

    // else if(String(b)=true){
    //     document.getElementById("output-h2").textContent = ` ${a} is a string.`;
    // }

    
    // outp = Number(a);
    // if (outp <= 0){
    //     document.getElementById("output-box").textContent = ` ${outp} is not a positive number.`
    //     document.getElementById("output-box").innerHTML = `<h2> ${outp} is less than ' 0 '</h2>`
    // }
    // else if(outp > 0){
    //     document.getElementById("output-box").innerHTML = `<h2> ${outp} is greater than ' 0 ' </h2>`
    // }
