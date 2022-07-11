const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
                    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
                    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
                    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"];


const firstPasswordElement = document.getElementById("first-password");
const secondPasswordElement = document.getElementById("second-password");
let isGenerated = false;

function generatePasswords() {
    const useSpecial = document.getElementById("use-special").checked;
    const passwordLength = document.getElementById("password-length").value;
    let firstPassword = "";
    let secondPassword = "";
    let arrayMaxIndex = characters.indexOf("9");
    isGenerated = true;

    if(useSpecial) {
        arrayMaxIndex = characters.length;
    }

    for (let i = 0; i < passwordLength; i++) {
        firstPassword += returnRandomChar(arrayMaxIndex);
        secondPassword += returnRandomChar(arrayMaxIndex);
    }

    firstPasswordElement.textContent = firstPassword;
    secondPasswordElement.textContent = secondPassword;
}

function returnRandomChar(length) {
    return characters[Math.floor(Math.random() * length)];
}

function copyText(id) {
    if (isGenerated) {
        let text = document.getElementById(id);
        let textValue = text.textContent;
        navigator.clipboard.writeText(textValue);
        text.textContent = "Copied to clipboard";
        setTimeout(() =>{text.textContent = textValue;}, 300);
    }
}

function setMode() {
    let bodyClassName = document.body.className;
    if (bodyClassName === "light") {
        document.body.className = "dark";
    } else {
        document.body.className = "light";
    }
    
}