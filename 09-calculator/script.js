'use strict'

const display = document.getElementById('display'),
      buttons = document.querySelectorAll('.calc-btns button');

let currentInput = '',
    firstOperand = null,
    operator = null,
    resetDisplay = false;

function updateDisplay() {
    display.textContent = currentInput || '0';
};

function clearDisplay () {
    currentInput = '0';
    firstOperand = null;
    operator = null;
    resetDisplay = false;
    updateDisplay();
};

function addDecimal() {
    if(!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}; 

function calculateResult() {
    if(operator && firstOperand !== null) {
        let secondOperand = parseFloat(currentInput),
            result = 0;
        switch(operator) {
            case '+':
                result = firstOperand + secondOperand;
            break;
            case '-':
                result = firstOperand - secondOperand;
            break;
            case 'x':
                result = firstOperand * secondOperand;
            break;
            case '/':
                result = firstOperand / secondOperand;
            break;
            case '%':
                result = firstOperand % secondOperand;
            break;
            case '**':
                result = Math.pow(firstOperand, secondOperand);
            break;
        }
        currentInput = result.toString();
        firstOperand = result;
        operator = null;
        resetDisplay = true;
        updateDisplay();
    }
};

function setOperator(op) {
    if(firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    } else if(operator) {
        calculateResult();
    }
    operator = op;
    resetDisplay = true;
};

function takeNumber(number) {
    if(resetDisplay) {
        currentInput = number;
        resetDisplay = false;
    } else {
        currentInput = (currentInput === '0') ? number : currentInput + number;
    }
    updateDisplay();
};

function takeOperator(op) {
    switch(op) {
        case 'C':
            clearDisplay();
        break;
        case '.':
            addDecimal();
        break;
        case '=':
            calculateResult();
        break;
        case '+':
        case '-':
        case 'x':
        case '/':
        case '%':
        case '**':
            setOperator(op);
        break;

    }
};

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonDisplay = button.textContent;
        if(button.classList.contains('number')) {
            takeNumber(buttonDisplay);
        } else if(button.classList.contains('operator')) {
            takeOperator(buttonDisplay);
        }
    })
});
