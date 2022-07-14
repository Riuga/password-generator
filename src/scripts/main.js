import "../styles/style.less";
import * as pg from "./passwordGenerator.js";
import { setTheme, render } from "./visuals";

const characters = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=",
    "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/",
];

render();

document.querySelector("#color-mode").addEventListener("click", () => {
    setTheme();
});
document.querySelector("#generate-button").addEventListener("click", () => {
    pg.generatePasswords(characters);
});
document.querySelector("#first-password").addEventListener("click", () => {
    pg.copyText("#first-password");
});
document.querySelector("#second-password").addEventListener("click", () => {
    pg.copyText("#second-password");
});
