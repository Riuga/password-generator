export function generatePasswords(characters) {
	const useSpecial = document.querySelector("#use-special").checked;
	const passwordLength = document.querySelector("#password-length").value;
	const firstPasswordElement = document.querySelector("#first-password");
	const secondPasswordElement = document.querySelector("#second-password");
	let firstPassword = "";
	let secondPassword = "";
	let arrayMaxIndex = characters.indexOf("9");

	if (useSpecial) {
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
	const textValue = text.textContent;
	navigator.clipboard.writeText(textValue);
	text.textContent = "Copied to clipboard";
	setTimeout(() => {
		text.textContent = textValue;
	}, 300);
}
