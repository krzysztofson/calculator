// Caching selectors so browser doesn't need to look for them every time
const digitBtns = document.querySelectorAll('[data-digit]');
const functionBtns = document.querySelectorAll('[data-function]');
const acBtn = document.querySelector('[data-allclear]');
const saveBtn = document.querySelector('[data-save]');
const resultBtn = document.querySelector('[data-result]');
const beforeScreenText = document.querySelector('[data-before]');
const nowScreenText = document.querySelector('[data-now]');

class Calculator {
    constructor(beforeScreenText, nowScreenText) {
        // assigning calculator display to class
        this.beforeScreenText = beforeScreenText;
        this.nowScreenText = nowScreenText;
    }

    showText(number) {
        // update value
        this.nowScreen = number;
    }

    refreshScreen() {
        // show value on screen
        this.nowScreenText.innerText = this.nowScreen;
        console.log(this.nowScreen);
    }
}

const calculator = new Calculator(beforeScreenText, nowScreenText);

digitBtns.forEach(btn => {
    // when digit btn is clicked get it's value and update screen
    btn.addEventListener('click', () => {
        calculator.showText(btn.innerText);
        calculator.refreshScreen();
    })
})