const displayBox = document.querySelector('#display');
const operands = document.querySelector('#operands');

let numOne;
let operator;
let numTwo;

let currentDisplay = displayBox.textContent;

function updateDisplay() {
    currentDisplay = displayBox.textContent;
}

function operate(numOne, operator, numTwo) {
    switch (operator) {
        case '+':
            add(numOne, numTwo);
            break;
        case '-':
            subtract(numOne, numTwo);
            break;
        case '*':
            multiply(numOne, numTwo);
            break;
        case '/':
            divide(numOne, numTwo);
            break;
    }
}

function add(left, right) {
    return left + right;
}

function subtract(left, right) {
    return left - right;
}

function multiply(left, right) {
    return left * right;
}

function divide(left, right) {
    return left / right;
}

operands.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        if (displayBox.textContent == 0) {
            displayBox.textContent = '';
        }
        switch (e.target.id) {
            case '7':
                displayBox.textContent += 7;
                break;
            case '8':
                displayBox.textContent += 8;
                break;
            case '9':
                displayBox.textContent += 9;
                break;
            case '/':
                displayBox.textContent += ' / ';
                break;
            case '4':
                displayBox.textContent += 4;
                break;
            case '5':
                displayBox.textContent += 5;
                break;
            case '6':
                displayBox.textContent += 6;
                break;
            case 'x':
                displayBox.textContent += ' * ';
                break;
            case '1':
                displayBox.textContent += 1;
                break;
            case '2':
                displayBox.textContent += 2;
                break;
            case '3':
                displayBox.textContent += 3;
                break;
            case '-':
                displayBox.textContent += ' - ';
                break;
            case '0':
                displayBox.textContent += 0;
                break;
            case 'dot':
                displayBox.textContent += '.';
                break;
            case '=':
                operate();
                break;
            case '+':
                displayBox.textContent += ' + ';
                break;
            case 'clear':
                displayBox.textContent = 0;
                break;
        }
        updateDisplay();
    }
});