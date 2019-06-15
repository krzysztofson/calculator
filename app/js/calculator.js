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
        this.beforeScreen = '';
        this.nowScreen = '';
    }

    showText(number) {
        // update value
        if (number === '.' && this.nowScreen.includes('.')) {
            return
        }
        this.nowScreen += number.toString();
    }

    selectAction(action) {
        // if action is chosen move value to top screen
        // works only for first choice
        if (this.nowScreen === '') {
            return
        }
        if (this.beforeScreen !== '') {
            this.calculate();
        }
        this.action = action;
        this.beforeScreen = this.nowScreen;
        this.nowScreen = '';
    }

    calculate() {
        let result;
        const before = parseFloat(this.beforeScreen);
        const now = parseFloat(this.nowScreen);
        switch (this.action) {
            case '+':
                result = before + now;
                console.log(result);
                break;
            case '–':
                result = before - now;
                break;
            case '÷':
                result = before / now;
                break;
            case '*':
                result = before * now;
                break;
        }
        this.nowScreen = result;
    }

    refreshScreen() {
        // show value on screen
        this.nowScreenText.innerText = this.nowScreen;
        this.beforeScreenText.innerText = this.beforeScreen;
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

functionBtns.forEach(btn => {
    // when digit btn is clicked get it's value and update screen
    btn.addEventListener('click', () => {
        calculator.selectAction(btn.innerText);
        calculator.refreshScreen();
    })
})

resultBtn.addEventListener('click', btn => {
    calculator.calculate();
    calculator.refreshScreen();
})