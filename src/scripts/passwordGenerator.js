export function generatePasswords(characters) {
    const useSpecial = document.getElementById("use-special").checked;
    const passwordLength = document.getElementById("password-length").value;
    const firstPasswordElement = document.getElementById("first-password");
    const secondPasswordElement = document.getElementById("second-password");
    let firstPassword = "";
    let secondPassword = "";
    let arrayMaxIndex = characters.indexOf("9");
    
    if(useSpecial) {
        arrayMaxIndex = characters.length;
    }

    for (let i = 0; i < passwordLength; i++) {
        firstPassword += returnRandomChar(characters, arrayMaxIndex);
        secondPassword += returnRandomChar(characters, arrayMaxIndex);
    }

    firstPasswordElement.textContent = firstPassword;
    secondPasswordElement.textContent = secondPassword;
}

export function returnRandomChar(characters, length) {
    return characters[Math.floor(Math.random() * length)];
}

export function copyText(id) {
    const text = document.querySelector(id);
    let textValue = text.textContent;
    navigator.clipboard.writeText(textValue);
    text.textContent = "Copied to clipboard";
    setTimeout(() =>{text.textContent = textValue;}, 300);
}

