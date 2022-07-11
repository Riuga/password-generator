export function setTheme() {
    let bodyClassName = document.body.className;
    if (bodyClassName === "light") {
        document.body.className = "dark";
    } else {
        document.body.className = "light";
    }
    
}