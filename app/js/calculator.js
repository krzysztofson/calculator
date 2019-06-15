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

    allClear() {
        // clears all data
        this.nowScreen = '';
        this.beforeScreen = '';
        this.beforeScreenText.innerText = '';
        this.action = undefined;
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
        // upadates and displays result var. based on selected action
        let result;
        const before = parseFloat(this.beforeScreen);
        const now = parseFloat(this.nowScreen);
        switch (this.action) {
            case '+':
                result = before + now;
                break;
            case '–':
                result = before - now;
                break;
            case '÷':
                result = before / now;
                break;
            case 'x':
                result = before * now;
                break;
        }
        this.beforeScreenText.innerText += ` ${this.nowScreen.toString()}`;
        this.nowScreen = result;
        this.beforeScreenText.innerText += ' =';
        this.action = undefined;
    }

    refreshScreen() {
        // show value on screen
        this.nowScreenText.innerText = formatNumber(this.nowScreen);
        if (this.action != null) {
            this.beforeScreenText.innerText = `${this.beforeScreen} ${this.action} `;
        }
    }
}

const calculator = new Calculator(beforeScreenText, nowScreenText);

function formatNumber(number) {
    // add coma every 3 digits befor dot
    return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

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

acBtn.addEventListener('click', btn => {
    calculator.allClear();
    calculator.refreshScreen();
})
