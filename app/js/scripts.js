// Caching selectors so browser doesn't need to look for them every time
const digitBtns = document.querySelectorAll('[data-digit]');
const functionBtns = document.querySelectorAll('[data-function]');
const acBtn = document.querySelector('[data-allclear]');
const resultBtn = document.querySelector('[data-result]');
const beforeScreenText = document.querySelector('[data-before]');
const nowScreenText = document.querySelector('[data-now]');

class Calculator {
    constructor(beforeScreenText, nowScreenText) {
        // assigning calculator display to class
        this.beforeScreenText = beforeScreenText;
        this.nowScreenText = nowScreenText;
        this.allClear();
    }

    allClear() {
        // clears all data
        this.nowScreen = '';
        this.beforeScreen = '';
        this.beforeScreenText.innerText = '';
        this.action = null;
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
        // don't run opperation when there's no value or it already ran
        if (this.beforeScreenText.innerText.includes('=') || !this.beforeScreenText.innerText) {
            return
        }
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
        this.action = null;
    }

    refreshScreen() {
        // show value on screen
        this.nowScreenText.value = formatNumber(this.nowScreen);
        if (this.action != null) {
            this.beforeScreenText.innerText = `${this.beforeScreen} ${this.action} `;
        }
    }
}

function formatNumber(number) {
    // add coma every 3 digits befor dot
    return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
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
    // get action from function buttons
    btn.addEventListener('click', () => {
        calculator.selectAction(btn.innerText);
        calculator.refreshScreen();
    })
})

resultBtn.addEventListener('click', btn => {
    // show results
    calculator.calculate();
    calculator.refreshScreen();
})

acBtn.addEventListener('click', btn => {
    // restore to empty
    calculator.allClear();
    calculator.refreshScreen();
})
