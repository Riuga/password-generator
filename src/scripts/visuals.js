export function render() {
	if (Number(localStorage.getItem("colorTheme"))) {
		document.body.className = "light";
	} else {
		document.body.className = "dark";
	}
}

export function setTheme() {
	const bodyClassName = document.body.className;
	if (bodyClassName === "light") {
		document.body.className = "dark";
		localStorage.setItem("colorTheme", "0");
	} else {
		document.body.className = "light";
		localStorage.setItem("colorTheme", "1");
	}
}
