const passwordLength = document.getElementById("numBox");
const lowerC = document.getElementById("lowerC");
const upperC = document.getElementById("upperC");
const numberC = document.getElementById("numberC");
const symbolC = document.getElementById("symbolC");
const mySubmit = document.getElementById("mySubmit");
const inputBox = document.getElementById("inputBox");
const error = document.getElementById("error");

let includeLowercase = false;
let includeUppercase = false;
let includeNumbers = false;
let includeSymbols = false;


function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
    
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = lowercaseChars.toUpperCase();
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+=-"

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";
    
    if(length <= 0){
        error.textContent = `(password length must be atleast 1)`;
        return ``;
    }
    if(allowedChars.length === 0){
        error.textContent = `{At least 1 set of character must be selected}`;
        return ``;
    }
    else{
        error.textContent = ``;
    }
    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

mySubmit.onclick = function(){
    includeLowercase = lowerC.checked ? true : false;
    includeUppercase = upperC.checked ? true : false;
    includeNumbers = numberC.checked ? true : false;
    includeSymbols = symbolC.checked ? true : false;

    let length = passwordLength.value ;

    const password = generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols);    
    
    inputBox.value = password;
}