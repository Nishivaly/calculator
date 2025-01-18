let numOne;
let operator;
let numTwo;

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