let output = document.querySelector(".output");

const passwordLength = 12;
const includeUppercase = true;
const includeLowercase = false;
const includeNumbers = true;
const includeSymbols = true;

function generatePassword(num_length,uppercase,lowercase,numbers,symbols){
    let password = "";
    let allowedCharacters = "";

    if(num_length<=0){
        output.textContent = "digits cant be less than or equal to '0' ";
    }
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbersSet = "1234567890";
    const symbolsSet = "!@#$%&*()_+?";

    if (uppercase) {
        allowedCharacters += uppercaseLetters;
    }
    if (lowercase) {
        allowedCharacters += lowercaseLetters;
    }
    if (numbers) {
        allowedCharacters += numbersSet;
    }
    if (symbols) {
        allowedCharacters += symbolsSet;
    }
    for(let i = 0; i < num_length; i++){
        password += allowedCharacters.charAt(Math.floor(Math.random() * allowedCharacters.length));
    }

    output.textContent = password;
}

generatePassword(passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
