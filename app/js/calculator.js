// Caching selectors so browser doesn't need to look for them every time
const digitBtns = document.querySelectorAll('[data-digit]');
const functionBtns = document.querySelectorAll('[data-function]');
const acBtn = document.querySelector('[data-allclear]');
const saveBtn = document.querySelector('[data-save]');
const resultBtn = document.querySelector('[data-result]');
const beforeScreen = document.querySelector('[data-before]');
const nowScreen = document.querySelector('[data-now]');
console.log(digitBtns);
