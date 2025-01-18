const displayBox = document.querySelector('#display');
const operands = document.querySelector('#operands');

let numOne;
let operator;
let numTwo;

let currentDisplay = displayBox;

operands.addEventListener('click', (e) => {
    switch (e.target.id) {
        case '7':
            displayBox.textContent += 7;
            break;

        default:
            break;
    }
    updateDisplay();

});

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